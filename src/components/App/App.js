import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button, ButtonRow } from 'state-template';

import STD20, { selectors as std20Selectors } from '../STD20';

class App extends React.Component {
  state = { initialValues: {} }

  componentDidMount() {
    this.onLoad();
  }

  onLoad = () => {
    // set initial values if they saved them
    const std20Values = localStorage.getItem('std20');

    if (std20Values) {
      const initialValues = JSON.parse(std20Values);
      this.setState({ initialValues });
    }
  }

  onSave = () => {
    const { std20Values } = this.props;
    localStorage.setItem('std20', JSON.stringify(std20Values));
    this.onLoad();
  }

  onReset = () => {
    const confirm = window.confirm('This will clear the entire form, there is no going back. Are you sure?');

    if (confirm) {
      localStorage.setItem('std20', JSON.stringify({}));
      this.onLoad();
    }
  }

  onPrint = () => {
    window.print();
  }

  renderButtons = () => (
    <ButtonRow className={'m-y-md d-print-none'}>
      <Button text={'Save'} onClick={this.onSave} variant={'standout'} iconProps={{ name: 'cloud-upload' }} />
      <Button text={'Reset'} onClick={this.onReset} variant={'default'} iconProps={{ name: 'close-line' }} />
      <Button text={'Print'} onClick={this.onPrint} variant={'primary'} iconProps={{ name: 'print' }} className={'float-right'} />
    </ButtonRow>
  )

  // Render form values for debugging, runs in dev only...
  renderValues = () => {
    if (process.env.NODE_ENV !== 'development') return null;

    const { std20Values } = this.props;
    return (
      <div className={'d-print-none'}>
        <h3>Form Values (This only shows in dev)</h3>
        <pre>{JSON.stringify(std20Values, null, 2)}</pre>
      </div>
    );
  }

  render() {
    const { initialValues } = this.state;

    return (
      <div className={'container'}>
        {/* <p>STATE OF CALIFORNIA - California Department of Technology</p>
        <p>TELECOMMUNICATIONS SERVICE REQUEST</p>
        <p>STD. 20 (Rev. 9/2017)</p> */}

        {this.renderButtons()}

        <STD20 initialValues={initialValues} />

        {this.renderButtons()}

        {this.renderValues()}
      </div>
    );
  }
}

App.propTypes = {
  std20Values: T.object,
};

App.defaultProps = {
  std20Values: {},
};

export const mapStateToProps = createStructuredSelector({
  std20Values: std20Selectors.getValues(),
});

const withRedux = connect(mapStateToProps)(App);

export default withRedux;

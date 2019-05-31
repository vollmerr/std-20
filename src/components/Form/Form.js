import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';

import Section1to3 from './Sections/Section1to3';
import Section4 from './Sections/Section4';
import Section5 from './Sections/Section5';
import Section6 from './Sections/Section6';
import Section7 from './Sections/Section7';
import FormButtons from './FormButtons';
import PrintForm from './PrintForm';
import * as selectors from './selectors';
import schema from './schema';

class Form extends React.Component {
  state = {
    disabled: {
      section6: true,
    },
  }

  componentDidMount() {
    this.updateDisabled(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const { formValues } = this.props;

    if (JSON.stringify(nextProps.formValues) !== JSON.stringify(formValues)) {
      this.updateDisabled(nextProps);
      this.clearSection6(nextProps);
    }
  }

  onReset = () => {
    const { reset, setInitialValues } = this.props;
    const confirm = window.confirm('This will clear the entire form, there is no going back. Are you sure?');

    if (confirm) {
      localStorage.setItem('std-20', JSON.stringify({}));
      reset();
      setInitialValues();
    }
  }

  onSave = () => {
    const { formValues, setInitialValues } = this.props;
    localStorage.setItem('std-20', JSON.stringify(formValues));
    setInitialValues();
  }

  onSubmit = (values) => {
    new PrintForm(values).print();
  }

  updateDisabled = (nextProps) => {
    const disabled = {
      // disable section 6 if not a state government eligibility
      section6: nextProps.formValues.eligibility !== 'state',
    };

    this.setState({ disabled });
  }

  clearSection6 = (nextProps) => {
    const { change } = this.props;
    // eligibility changed, clear section 6
    if (nextProps.formValues.eligibility !== 'state') {
      change(schema.catrName.name, '');
      change(schema.catrEmail.name, '');
      change(schema.catrPhone.name, '');
      change(schema.catrFax.name, '');
      change(schema.catrAddress.name, '');
      change(schema.catrCity.name, '');
      change(schema.catrState.name, '');
      change(schema.catrZip.name, '');
      change(schema.catrSignature.name, '');
      change(schema.catrTitle.name, '');
      change(schema.catrDate.name, '');
    }
  }

  // Render form values for debugging, runs in dev only...
  renderValues = () => {
    if (process.env.NODE_ENV !== 'development') return null;

    const { formValues } = this.props;
    return (
      <div className={'d-print-none'}>
        <h3>Form Values (This only shows in dev)</h3>
        <pre>{JSON.stringify(formValues, null, 2)}</pre>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    const { disabled } = this.state;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <h2 className={'d-print-none'}>STD 20 Form</h2>
        <FormButtons onSave={this.onSave} onReset={this.onReset} />

        <Section1to3 />
        <hr />
        <Section4 />
        <hr />
        <Section5 />
        <hr />
        <Section6 disabled={disabled.section6} />
        <hr />
        <Section7 />

        <FormButtons onSave={this.onSave} onReset={this.onReset} />
        {/* {this.renderValues()} */}
      </form>
    );
  }
}

Form.propTypes = {
  /* values of the current form */
  formValues: T.object,

  /* set the initial values of the form */
  setInitialValues: T.func.isRequired,

  /* change a form field's value, provided by redux-form */
  change: T.func.isRequired,

  /* reset the form values, provided by redux-form */
  reset: T.func.isRequired,

  /* submit the form values with validation, provided by redux-form */
  handleSubmit: T.func.isRequired,
};

Form.defaultProps = {
  formValues: {},
};

export const mapStateToProps = createStructuredSelector({
  formValues: selectors.getValues(),
});

const withRedux = connect(mapStateToProps)(Form);

const withReduxForm = reduxForm({
  enableReinitialize: true,
  form: 'std-20',
})(withRedux);

export default withReduxForm;

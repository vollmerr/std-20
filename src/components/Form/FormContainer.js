import React from 'react';

import Form from './Form';
import testValues from './testValues.json';

// set to 1 to fill form out with test values
const USE_TEST_VALUES = 1;

class FormContainer extends React.Component {
  state = {
    initialValues: {},
  }

  componentDidMount() {
    this.setInitialValues();
  }

  setInitialValues = () => {
    // set initial values if they saved them
    const formValues = localStorage.getItem('std-20');

    if (formValues) {
      const initialValues = USE_TEST_VALUES ? testValues : JSON.parse(formValues);
      this.setState({ initialValues });
    }
  }

  render() {
    const { initialValues } = this.state;

    return (
      <Form
        initialValues={initialValues}
        setInitialValues={this.setInitialValues}
      />
    );
  }
}

export default FormContainer;

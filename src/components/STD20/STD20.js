import React from 'react';
import { reduxForm } from 'redux-form';

import Section1to3 from './Sections/Section1to3';
import Section4 from './Sections/Section4';
import Section5 from './Sections/Section5';
import Section6 from './Sections/Section6';
import Section7 from './Sections/Section7';

class STD20 extends React.Component {
  componentDidMount() { }

  render() {
    return (
      <form>
        <Section1to3 />
        <hr />
        <Section4 />
        <hr />
        <Section5 />
        <hr />
        <Section6 />
        <hr />
        <Section7 />
      </form>
    );
  }
}

const withReduxForm = reduxForm({
  enableReinitialize: true,
  form: 'std-20',
})(STD20);

export default withReduxForm;

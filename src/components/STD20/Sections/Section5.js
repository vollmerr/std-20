import React from 'react';
import { A, FieldCheckboxes } from 'state-template';

import schema, { calNetLink } from '../schema';

const Section5 = () => (
  <fieldset className={'form-group'}>
    <div className={'row'}>
      <legend className={'col-md-12'}>5. Eligibility</legend>

      <FieldCheckboxes {...schema.eligibility} aria-describedby={'field__eligibility--help'} className={'col-md-6'} />

      <p id={'field__eligibility--help'} className={'col-md-6'}>
        <b>**</b>
        {' Local and State Government require a '}
        <A text={'Non-State Agency Service Policy and an Authorization Order (ATO)'} href={calNetLink} />
        {' to obtain eligibility prior to first order.'}
      </p>
    </div>
  </fieldset>
);

export default Section5;

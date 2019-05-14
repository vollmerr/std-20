import React from 'react';
import { A, FieldRadioButtons } from 'state-template';

import schema, { calNetLink } from '../schema';

const Section5 = () => (
  <div className={'row'} role={'group'} aria-labelledby={'section5__header'}>
    <div id={'section5__header'} className={'col-md-12'}>5. Eligibility</div>

    <FieldRadioButtons
      {...schema.eligibility}
      aria-describedby={'field__eligibility--help'}
      className={'col-md-6'}
    />

    <p id={'field__eligibility--help'} className={'col-md-6'}>
      <b>**</b>
      {' Local and State Government require a '}
      <A text={'Non-State Agency Service Policy and an Authorization Order (ATO)'} href={calNetLink} />
      {' to obtain eligibility prior to first order.'}
    </p>
  </div>
);

export default Section5;

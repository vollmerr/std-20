import React from 'react';
import { FieldRadioButtons } from 'state-template';

import schema from '../schema';

const Section5 = () => (
  <div className={'row'} role={'group'} aria-labelledby={'section5__header'}>
    <h3 id={'section5__header'} className={'col-md-12'}>5. Eligibility</h3>

    <FieldRadioButtons
      {...schema.eligibilityState}
      className={'col-md-6'}
      inline
    />

    <FieldRadioButtons
      {...schema.eligibilityNonState}
      className={'col-md-6'}
      inline
    />
  </div>
);

export default Section5;

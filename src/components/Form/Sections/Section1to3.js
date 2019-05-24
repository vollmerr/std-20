import React from 'react';
import { FieldCheckboxes, FieldDate, FieldInput } from 'state-template';

import schema from '../schema';

const Section1to3 = () => (
  <div className={'row'}>
    <div className={'col-md-6'}>
      <div className={'row'}>
        <FieldInput {...schema.agencyRequestNumber} className={'col-md-6'} />
        <FieldDate {...schema.requestDate} className={'col-md-6'} />
      </div>

      <FieldInput {...schema.contractorName} />
    </div>

    <div className={'col-md-6'}>
      <FieldCheckboxes {...schema.requestType} />
    </div>
  </div>
);

export default Section1to3;

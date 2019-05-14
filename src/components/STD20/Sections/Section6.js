import React from 'react';
import { FieldDate, FieldInput } from 'state-template';

import schema from '../schema';

const Section6 = () => (
  <fieldset className={'form-group'}>
    <div className={'row'}>
      <legend className={'col-md-12'}>6. CATR/ATR Information</legend>

      <FieldInput {...schema.catrName} className={'col-md-4'} />
      <FieldInput {...schema.catrEmail} className={'col-md-4'} />
      <FieldInput {...schema.catrPhone} className={'col-md-2'} />
      <FieldInput {...schema.catrFax} className={'col-md-2'} />

      <FieldInput {...schema.catrAddress} className={'col-md-4'} />
      <FieldInput {...schema.catrCity} className={'col-md-4'} />
      <FieldInput {...schema.catrState} className={'col-md-2'} />
      <FieldInput {...schema.catrZip} className={'col-md-2'} />

      <FieldInput {...schema.catrSignature} className={'col-md-4'} />
      <FieldInput {...schema.catrTitle} className={'col-md-4'} />
      <FieldDate {...schema.catrDate} className={'col-md-4'} />
    </div>
  </fieldset>
);

export default Section6;

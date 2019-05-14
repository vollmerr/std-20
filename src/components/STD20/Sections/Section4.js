import React from 'react';
import { FieldInput } from 'state-template';

import schema from '../schema';

const Section4 = () => (
  <fieldset className={'form-group'}>
    <div className={'row'}>
      <legend className={'col-md-12'}>4. Agency Information</legend>

      <FieldInput {...schema.agencyDepartment} className={'col-md-4'} />
      <FieldInput {...schema.agencyContact} className={'col-md-4'} />
      <FieldInput {...schema.agencyPhone} className={'col-md-2'} />
      <FieldInput {...schema.agencyFax} className={'col-md-2'} />

      <FieldInput {...schema.agencyDivision} className={'col-md-4'} />
      <FieldInput {...schema.gsaCode} className={'col-md-4'} />
      <FieldInput {...schema.agencyEmail} className={'col-md-4'} />

      <FieldInput {...schema.agencyServiceAddress} className={'col-md-4'} />
      <FieldInput {...schema.agencyRequestedAddress} className={'col-md-4'} />
      <FieldInput {...schema.agencyBillingAddress} className={'col-md-4'} />
    </div>
  </fieldset>
);

export default Section4;

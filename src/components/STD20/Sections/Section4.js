import React from 'react';
import { FieldInput } from 'state-template';

import schema from '../schema';

const Section4 = () => (
  <div className={'row'} role={'group'} aria-labelledby={'section4__header'}>
    <div id={'section4__header'} className={'col-md-12'}>4. Agency Information</div>

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
);

export default Section4;

import React from 'react';
import { FieldDate, FieldInput } from 'state-template';

import schema from '../schema';

const Section6 = () => (
  <div className={'row'} role={'group'} aria-labelledby={'section6__header'}>
    <div id={'section6__header'} className={'col-md-12'}>6. CATR/ATR Information</div>

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
);

export default Section6;

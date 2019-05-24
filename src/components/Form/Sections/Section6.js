import React from 'react';
import T from 'prop-types';
import { FieldDate, FieldInput } from 'state-template';

import schema from '../schema';

const Section6 = ({ disabled }) => (
  <div className={'row'} role={'group'} aria-labelledby={'section6__header'}>
    <div id={'section6__header'} className={'col-md-12'}>6. CATR/ATR Information</div>

    <FieldInput {...schema.catrName} className={'col-md-4'} disabled={disabled} />
    <FieldInput {...schema.catrEmail} className={'col-md-4'} disabled={disabled} />
    <FieldInput {...schema.catrPhone} className={'col-md-2'} disabled={disabled} />
    <FieldInput {...schema.catrFax} className={'col-md-2'} disabled={disabled} />

    <FieldInput {...schema.catrAddress} className={'col-md-4'} disabled={disabled} />
    <FieldInput {...schema.catrCity} className={'col-md-4'} disabled={disabled} />
    <FieldInput {...schema.catrState} className={'col-md-2'} disabled={disabled} />
    <FieldInput {...schema.catrZip} className={'col-md-2'} disabled={disabled} />

    <FieldInput {...schema.catrSignature} className={'col-md-4'} disabled={disabled} />
    <FieldInput {...schema.catrTitle} className={'col-md-4'} disabled={disabled} />
    <FieldDate {...schema.catrDate} className={'col-md-4'} disabled={disabled} />
  </div>
);

Section6.propTypes = {
  disabled: T.bool.isRequired,
};

export default Section6;

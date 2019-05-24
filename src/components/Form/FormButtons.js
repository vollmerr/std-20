import React from 'react';
import T from 'prop-types';
import { Button, ButtonRow } from 'state-template';

const FormButtons = ({ onSave, onReset }) => (
  <ButtonRow className={'m-y-md d-print-none'}>
    <Button text={'Save'} onClick={onSave} variant={'standout'} iconProps={{ name: 'cloud-upload' }} />
    <Button text={'Reset'} onClick={onReset} variant={'default'} iconProps={{ name: 'close-line' }} />
    <Button type={'submit'} text={'Print'} variant={'primary'} iconProps={{ name: 'print' }} className={'float-right'} />
  </ButtonRow>
);

FormButtons.propTypes = {
  /* called when clicking the save button */
  onSave: T.func.isRequired,

  /* called when clicking the reset button */
  onReset: T.func.isRequired,
};

export default FormButtons;

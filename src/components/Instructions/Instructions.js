import React from 'react';
import { A } from 'state-template';

/* eslint-disable react/jsx-one-expression-per-line */
const Instructions = () => (
  <div id={'std-20__instructions'}>
    <h2>Instructions</h2>
    <p>To complete a Telecommunications Service Request Form (STD 20):</p>

    <ol>
      <li>Fill out the <strong>STD 20 Form</strong> below</li>
      <li>Press the <strong>Save</strong> button to return at a later time</li>
      <li>Press the <strong>Print</strong> button to print the completed form</li>
      <li>Attach any additional information as needed</li>
    </ol>

    <p>
      {'Please refer to the '}
      <A href={'https://cdt.ca.gov/services/wp-content/uploads/sites/2/sites/2/2017/09/CALNET-ordering-STD20-user_instruction_091417.pdf'} text={'STD. 20 Instructions'} />
      {' for futher assistance.'}
    </p>
  </div>
);

export default Instructions;

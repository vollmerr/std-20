import React from 'react';
import { A } from 'state-template';

const Resources = () => (
  <div id={'std-20__resources'}>
    <h2>Resources</h2>

    <li><A href={'https://www.dgs.ca.gov/Resources/SAM'} text={'State Administrative Manual (SAM)'} /></li>
    <li><A href={'https://cdt.ca.gov/services/calnet-stmm/'} text={'State Telecommunications Management Manual (STMM)'} /></li>
    <li><A href={'https://cdt.ca.gov/services/calnet-ordering/'} text={'Agency Telecommunications Representative (ATO) Forms'} /></li>
    <li><A href={'https://cdt.ca.gov/services/wp-content/uploads/sites/2/sites/2/2017/09/CALNET-ordering-STD20-user_instruction_091417.pdf'} text={'STD. 20 Instructions'} /></li>
  </div>
);

export default Resources;

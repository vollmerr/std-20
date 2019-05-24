import React from 'react';

import Form from '../Form';
import Instructions from '../Instructions';
import Resources from '../Resources';

class App extends React.Component {
  render() {
    return (
      <div>
        <div id={'pageHeader'}>
          <p>STATE OF CALIFORNIA - California Department of Technology</p>
          <p>TELECOMMUNICATIONS SERVICE REQUEST - STD. 20 (Rev. 9/2017)</p>
        </div>

        <p className={'text-center d-none d-print-block'} aria-hidden>
          <em>Attach additional information as needed</em>
        </p>

        <Instructions />
        <Form />
        <Resources />
      </div>
    );
  }
}

export default App;

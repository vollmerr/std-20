import React from 'react';

import Form from '../Form';
import Instructions from '../Instructions';
import Resources from '../Resources';

class App extends React.Component {
  render() {
    return (
      <div>
        <Instructions />
        <Form />
        <Resources />
      </div>
    );
  }
}

export default App;

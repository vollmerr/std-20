import React from 'react';

const Version = () => (
  <div id={'std-20__version'}>
    v
    {process.env.REACT_APP_VERSION}
  </div>
);

export default Version;

import React from 'react';

function AppName({ appName }) {
  return (
    <div style={{ border: '1px solid black', width: 'max-content' }}>
      <h4>AppName</h4>
      {appName}
    </div>
  );
}

export default AppName;

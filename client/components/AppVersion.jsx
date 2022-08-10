import React from 'react';

function AppVersion({ appVersion }) {
  return (
    <div style={{ border: '1px solid black', width: 'max-content' }}>
      <h4>AppVersion</h4>
      {appVersion}
    </div>
  );
}

export default AppVersion;

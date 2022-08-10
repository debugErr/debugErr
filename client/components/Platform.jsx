import React from 'react';

function Platform({ platform }) {
  return (
    <div style={{ border: '1px solid black', width: 'max-content' }}>
      <h4>Platform</h4>
      {platform}
    </div>
  );
}

export default Platform;

import React from 'react';

function Status_Severity({ status, severity }) {
  return (
    <div style={{ border: '1px solid black', width: 'max-content' }}>
      <h4>Status and Severity</h4>
      {status} {severity}
    </div>
  );
}

export default Status_Severity;

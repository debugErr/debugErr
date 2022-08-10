import React from 'react';

function ResolutionStatement({ resolutionStatement }) {
  return (
    <div style={{ border: '1px solid black', width: 'max-content' }}>
      <h4>ResolutionStatement</h4>
      {resolutionStatement}
    </div>
  );
}

export default ResolutionStatement;

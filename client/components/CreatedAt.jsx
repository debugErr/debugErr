import React from 'react';

function CreatedAt({ createdAt }) {
  return (
    <div style={{ border: '1px solid black', width: 'max-content' }}>
      <h4>CreatedAt</h4>
      {createdAt}
    </div>
  );
}

export default CreatedAt;

import React from 'react';

function Created_Modified_at({ createdAt, modifiedAt }) {
  return (
    <div style={{ border: '1px solid black', width: 'max-content' }}>
      <h4>Created and Modified at</h4>
      {createdAt} {modifiedAt}
    </div>
  );
}

export default Created_Modified_at;

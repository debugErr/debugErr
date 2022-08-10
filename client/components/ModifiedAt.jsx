import React from 'react';

function ModifiedAt({ modifiedAt }) {
  return (
    <div style={{ border: '1px solid black', width: 'max-content' }}>
      <h4>ModifiedAt</h4>
      {modifiedAt}
    </div>
  );
}

export default ModifiedAt;

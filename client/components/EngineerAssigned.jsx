import React from 'react';

function EngineerAssigned({ engineerAssigned }) {
  return (
    <div style={{ border: '1px solid black', width: 'max-content' }}>
      <h4>EngineerAssigned</h4>
      {engineerAssigned}
    </div>
  );
}

export default EngineerAssigned;

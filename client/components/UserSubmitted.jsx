import React from 'react';

function UserSubmitted({ submittedBy }) {
  return (
    <div style={{ border: '1px solid black', width: 'max-content' }}>
      <h4>UserSubmitted</h4>
      {submittedBy}
    </div>
  );
}

export default UserSubmitted;

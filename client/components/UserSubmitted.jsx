import React from 'react';
import { Typography } from '@mui/material';

function UserSubmitted({ submittedBy }) {
  return (
    <div style={{ border: '1px solid black', width: 'max-content' }}>
      <Typography>UserSubmitted</Typography>
      {submittedBy}
    </div>
  );
}

export default UserSubmitted;

import React from 'react';
import { Typography } from '@mui/material';

function Created_Modified_at({ createdAt, modifiedAt }) {
  return (
    <div style={{ border: '1px solid black', textAlign: 'center' }}>
      <Typography>Created and Modified at</Typography>
      {createdAt} {modifiedAt}
    </div>
  );
}

export default Created_Modified_at;

import React from 'react';
import { Typography } from '@mui/material';

function Platform({ platform }) {
  return (
    <div style={{ border: '1px solid black', width: 'max-content' }}>
      <Typography>Platform</Typography>
      {platform}
    </div>
  );
}

export default Platform;

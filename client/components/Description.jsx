import React from 'react';
import { Typography } from '@mui/material';

function Description({ description }) {
  return (
    <div
      style={{
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        width: 'max-content',
      }}
    >
      <Typography>Description</Typography>
      {description}
    </div>
  );
}

export default Description;

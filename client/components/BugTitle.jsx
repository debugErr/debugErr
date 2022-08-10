import React from 'react';
import { Typography } from '@mui/material';

function BugTitle({ title }) {
  return (
    <div style={{ border: '1px solid black', textAlign: 'center' }}>
      <Typography>BugTitle</Typography>
      {title}
    </div>
  );
}

export default BugTitle;

import React from 'react';
import { Typography } from '@mui/material';

function ResolutionStatement({ resolutionStatement }) {
  return (
    <div style={{ border: '1px solid black', textAlign: 'center' }}>
      <Typography>ResolutionStatement</Typography>
      {resolutionStatement}
    </div>
  );
}

export default ResolutionStatement;

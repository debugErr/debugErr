import React from 'react';
import { Typography } from '@mui/material';

function Status_Severity({ status, severity }) {
  return (
    <div style={{ border: '1px solid black', textAlign: 'center' }}>
      <Typography>Status and Severity</Typography>
      {status} {severity}
    </div>
  );
}

export default Status_Severity;

import { Typography } from '@mui/material';
import React from 'react';

function EngineerAssigned({ engineerAssigned }) {
  return (
    <div style={{ border: '1px solid black', textAlign: 'center' }}>
      <Typography>EngineerAssigned</Typography>
      {engineerAssigned}
    </div>
  );
}

export default EngineerAssigned;

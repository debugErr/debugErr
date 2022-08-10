import React from 'react';
import { Typography } from '@mui/material';

function StepsToRecreate({ recreationSteps }) {
  return (
    <div style={{ border: '1px solid black', textAlign: 'center' }}>
      <Typography>StepsToRecreate</Typography>
      {recreationSteps}
    </div>
  );
}

export default StepsToRecreate;

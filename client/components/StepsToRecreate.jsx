import React from 'react';
import { Typography } from '@mui/material';

function StepsToRecreate({ recreationSteps }) {
  return (
    <div style={{ border: '1px solid black', width: 'max-content' }}>
      <Typography>StepsToRecreate</Typography>
      {recreationSteps}
    </div>
  );
}

export default StepsToRecreate;

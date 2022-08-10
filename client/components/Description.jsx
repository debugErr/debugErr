import { buttonGroupClasses } from '@mui/material';
import React from 'react';

function Description({ description }) {
  return (
    <div style={{border: '1px solid black', display: 'flex', flexDirection: 'column', width: 'max-content'}}>
      <h4>Description</h4>
      {description}
    </div>
  );
}

export default Description;

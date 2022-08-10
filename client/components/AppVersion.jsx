import React from 'react';
import { Typography } from '@mui/material';

function AppVersion({ appVersion }) {
  return (
    <div style={{ border: '1px solid black', width: 'max-content' }}>
      <Typography>AppVersion</Typography>
      {appVersion}
    </div>
  );
}

export default AppVersion;

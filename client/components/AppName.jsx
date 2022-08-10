import React from 'react';

import { Typography } from '@mui/material';


function AppName({ appName }) {
  return (
    <div style={{ border: '1px solid black', width: 'max-content' }}>
      <Typography>AppName</Typography>
      {appName}
    </div>
  );
}

export default AppName;

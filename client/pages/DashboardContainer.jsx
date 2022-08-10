import React, { useState, useContext } from 'react';
import UserContext from '../UserContext';

// MUI
import { Typography } from '@mui/material/styles/createTypography';
// GRID IMPORTS
import { Paper, Grid } from '@mui/material';

// COMPONENTS
import AppName from '../components/AppName';
import AppVersion from '../components/AppVersion';
import BugTitle from '../components/BugTitle';
import Created_Modified_at from '../components/Created_Modified_at';
import Description from '../components/Description';
import EngineerAssigned from '../components/EngineerAssigned';
import List from '../components/List';
import Platform from '../components/Platform';
import ResolutionStatement from '../components/ResolutionStatement';
import Status_Severity from '../components/Status_Severity';
import StepsToRecreate from '../components/StepsToRecreate';
import UserSubmitted from '../components/UserSubmitted';

const DUMMY_DATA = [
  {
    id: 57,
    title: 'Bug 1',
    description: 'App crashes upon loading.',
    engineerAssigned: 'Moonhe',
    userSubmitted: 'Jared',
    status: 'assigned',
    severity: 'high',
    app: 'ourApp',
    createdAt: '06/29/93',
    modifiedAt: '05/09/22',
    stepsToRecreate: 'these are definetly the steps',
    resolutionStatement: 'this is a problem',
    appVersion: 'v0.1',
    platform: 'Mac',
  },
  {
    id: 58,
    title: 'Bug 2',
    description: 'Light mode does not work.',
    engineerAssigned: 'Brandon',
    userSubmitted: 'Jim',
    status: 'assigned',
    severity: 'high',
    stepsToRecreate: 'these are not the steps',
    resolutionStatement: 'this is definetly a resolution',
    app: 'ourApp',
    createdAt: '06/29/93',
    modifiedAt: '05/09/22',
    appVersion: 'v0.1',
    platform: 'Mac',
  },
  {
    id: 59,
    userSubmitted: 'Moonhe',
    engineerAssigned: 'Jim',
    app: 'ourApp',
    title: 'Bug 3',
    status: 'in progress',
    severity: 'high',
    stepsToRecreate: 'these are the steps',
    resolutionStatement: 'this is a resolution',
    description: 'Dark mode does not work.',
    createdAt: '06/29/93',
    modifiedAt: '05/09/22',
    appVersion: 'v0.1',
    platform: 'Mac',
  },
  {
    id: 60,
    title: 'Bug 4',
    description: 'Login does not work',
    engineerAssigned: 'Jaerd',
    userSubmitted: 'Jim',
    stepsToRecreate: 'these are for sure the steps',
    resolutionStatement: 'this is not a resolution',
    status: 'resolved',
    severity: 'low',
    app: 'debugERR',
    createdAt: '06/29/93',
    modifiedAt: '05/09/22',
    appVersion: 'v0.1',
    platform: 'Windows',
  },
];

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const [bugs, setBugs] = useState(DUMMY_DATA);
  const [selectedBug, setSelectedBug] = useState(bugs[0]);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Paper>
            <BugTitle title={selectedBug.title} />
          </Paper>
        </Grid>
        <Grid item md={3}>
          <Paper>
          <Created_Modified_at
              createdAt={selectedBug.createdAt}
              modifiedAt={selectedBug.modifiedAt}
            />
          </Paper>
        </Grid>
        <Grid item md={3}>
          <Paper>
            <AppName appName={selectedBug.app} />
          </Paper>
        </Grid>
        <Grid item md={3}>
          <Paper>
            <AppVersion appVersion={selectedBug.appVersion} />
          </Paper>
        </Grid>
        <Grid item md={3}>
          <Paper>
            <Platform platform={selectedBug.platform} />
          </Paper>
        </Grid>
        <Grid item md={3}>
          <Paper>
            <Platform platform={selectedBug.platform} />
          </Paper>
        </Grid>
        <Grid item md={3}>
          <Paper>
          <Status_Severity
              status={selectedBug.status}
              severity={selectedBug.severity}
            />
          </Paper>
        </Grid>
        <Grid item md={3}>
          <Paper>
            <UserSubmitted submittedBy={selectedBug.userSubmitted} />
          </Paper>
        </Grid>
        <Grid item md={2}>
          <Paper>
            <EngineerAssigned engineerAssigned={selectedBug.engineerAssigned} />
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper>
            <Description description={selectedBug.description} />
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper>
          <StepsToRecreate recreationSteps={selectedBug.stepsToRecreate} />
          </Paper>
        </Grid>
        <Grid item md={2}>
          <Paper>
          <ResolutionStatement
              resolutionStatement={selectedBug.resolutionStatement}
            />
          </Paper>
        </Grid>
        <Grid item md={9}>
          <Paper>
            <List bugList={bugs} selectBug={setSelectedBug} />
          </Paper>
        </Grid>
      </Grid>
    </div>

    // <div>
    //   <BugTitle title={selectedBug.title} />
    //   <Status_Severity
    //     status={selectedBug.status}
    //     severity={selectedBug.severity}
    //   />
    //   <AppName appName={selectedBug.app} />
    //   <AppVersion appVersion={selectedBug.appVersion} />
    //   <Platform platform={selectedBug.platform} />
    //   <Created_Modified_at
    //     createdAt={selectedBug.createdAt}
    //     modifiedAt={selectedBug.modifiedAt}
    //   />
    //   <UserSubmitted submittedBy={selectedBug.userSubmitted} />
    //   <EngineerAssigned engineerAssigned={selectedBug.engineerAssigned} />
    //   <Description description={selectedBug.description} />
    //   <StepsToRecreate recreationSteps={selectedBug.stepsToRecreate} />
    //   <ResolutionStatement
    //     resolutionStatement={selectedBug.resolutionStatement}
    //   />
    //   <List bugList={bugs} selectBug={setSelectedBug} />
    // </div>
  );
};

export default Dashboard;

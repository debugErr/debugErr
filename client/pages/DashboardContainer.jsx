import React, { useState, useContext } from 'react';
import UserContext from '../UserContext';

// MUI
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@mui/material/Box';

// COMPONENTS
import NavBar from '../components/NavBar';
import List from '../components/List';
import BugTitle from '../components/BugTitle';
import Description from '../components/Description';
import EngineerAssigned from '../components/EngineerAssigned';
import Status_Severity from '../components/Status_Severity';
import Platform from '../components/Platform';
import UserSubmitted from '../components/UserSubmitted';
import StepsToRecreate from '../components/StepsToRecreate';
import ResolutionStatement from '../components/ResolutionStatement';
import AppName from '../components/AppName';
import AppVersion from '../components/AppVersion';
import Created_Modified_at from '../components/Created_Modified_at';

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
      <NavBar />
      {user}
      <BugTitle title={selectedBug.title} />
      <Status_Severity
        status={selectedBug.status}
        severity={selectedBug.severity}
      />
      <AppName appName={selectedBug.app} />
      <AppVersion appVersion={selectedBug.appVersion} />
      <Platform platform={selectedBug.platform} />
      <Created_Modified_at
        createdAt={selectedBug.createdAt}
        modifiedAt={selectedBug.modifiedAt}
      />
      <UserSubmitted submittedBy={selectedBug.userSubmitted} />
      <EngineerAssigned engineerAssigned={selectedBug.engineerAssigned} />
      <Description description={selectedBug.description} />
      <StepsToRecreate recreationSteps={selectedBug.stepsToRecreate} />
      <ResolutionStatement
        resolutionStatement={selectedBug.resolutionStatement}
      />
      <List bugList={bugs} selectBug={setSelectedBug} />
    </div>
  );
};

export default Dashboard;

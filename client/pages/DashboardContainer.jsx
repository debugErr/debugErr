import React, { useState } from 'react';

// COMPONENTS
import NavBar from '../components/NavBar';
import List from '../components/List';
import BugTitle from '../components/BugTitle';
import Description from '../components/Description';
import Notes from '../components/Notes';
import EngineerAssigned from '../components/EngineerAssigned';
import Status_Severity from '../components/Status_Severity';
import Platform from '../components/Platform';

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
    app: 'ourApp',
    appVersion: 'v0.1',
    platform: 'Mac',
  },
  {
    id: 59,
    title: 'Bug 3',
    description: 'Dark mode does not work.',
    engineerAssigned: 'Jim',
    userSubmitted: 'Moonhe',
    status: 'in progress',
    severity: 'high',
    app: 'ourApp',
    appVersion: 'v0.1',
    platform: 'Mac',
  },
  {
    id: 60,
    title: 'Bug 4',
    description: 'Login does not work',
    engineerAssigned: 'Jaerd',
    userSubmitted: 'Jim',
    status: 'resolved',
    severity: 'low',
    app: 'debugERR',
    appVersion: 'v0.1',
    platform: 'Windows',
  },
];

const Dashboard = () => {
  const [bugs, setBugs] = useState(DUMMY_DATA);
  const [selectedBug, setSelectedBug] = useState(bugs[0]);

  return (
    <div>
      {/* <NavBar /> */}
      <BugTitle title={selectedBug.title} />
      <Status_Severity
        status={selectedBug.status}
        severity={selectedBug.severity}
      />
      <Platform platform={selectedBug.platform} />
      <Description description={selectedBug.description} />
      <List bugList={bugs} selectBug={setSelectedBug} />
      <Notes notes={selectedBug.notes} />
    </div>
  );
};

export default Dashboard;

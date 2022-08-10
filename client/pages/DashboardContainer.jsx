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
import NavBar from '../components/NavBar'
import { useEffect } from 'react';

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const [bugs, setBugs] = useState([]);
  const [selectedBug, setSelectedBug] = useState({});
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('/bugs').then((res) => res.json())
      .then((bugs) => {
        console.log(bugs)
        setBugs(bugs)
        setSelectedBug(bugs[0])
      });
  }, []);

  useEffect(() => {
    fetch(`/bugs/${selectedBug.id}`).then(res => res.json())
    .then(data => {
        console.log(data)
        setNotes(data)
      })
  }, [selectedBug]);

  // {
  //   "bug": [
  //     {
  //       "id": 1,
  //       "title": "Query Mixup",
  //       "Application": "Solid Structure",
  //       "Version": "1.0 BETA",
  //       "Status": "Assigned",
  //       "Stage": "Testing",
  //       "Severity": "Typo",
  //       "Steps To Recreate": "Click on enter button on UI and then reload the page",
  //       "Resolution Statement": null,
  //       "Submitted By": "Jim",
  //       "Assigned To": "Jared"
  //     }
  //   ],
  //   "eNotes": [
  //     {
  //       "id": 5,
  //       "Notes": "Verification needed before continuing",
  //       "Note Title": "Verify Bug",
  //       "Submitted By": "Jared",
  //       "Bug Title": "Query Mixup",
  //       "Bug ID": 1
  //     },
  //     {
  //       "id": 1,
  //       "Notes": "Bug has been assigned to an engineer",
  //       "Note Title": "Bug #3 Note #1",
  //       "Submitted By": "Brandon",
  //       "Bug Title": "Query Mixup",
  //       "Bug ID": 1
  //     }
  //   ]
  // }


  return (
    <div>
      <NavBar />
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Paper>
            <BugTitle title={selectedBug['Bug Title']} />
          </Paper>
        </Grid>
        {/* <Grid item md={3}>
          <Paper>
            <Created_Modified_at
              createdAt={selectedBug.createdAt}
              modifiedAt={selectedBug.modifiedAt}
            />
          </Paper>
        </Grid> */}
        <Grid item md={3}>
          <Paper>
            <AppName appName={selectedBug['Application']} />
          </Paper>
        </Grid>
        <Grid item md={3}>
          <Paper>
            <AppVersion appVersion={selectedBug['Version']} />
          </Paper>
        </Grid>
        {/* <Grid item md={3}>
          <Paper>
            <Platform platform={selectedBug.platform} />
          </Paper>
        </Grid> */}
        {notes.length ? <Grid item md={3}>
          <Paper>
            <Platform notes={notes} />
          </Paper>
        </Grid> : null }
        <Grid item md={3}>
          <Paper>
          <Status_Severity
              status={selectedBug['Status']}
              severity={selectedBug['Stage']}
            />
          </Paper>
        </Grid>
        <Grid item md={3}>
          <Paper>
            <UserSubmitted submittedBy={selectedBug['Submitted By']} />
          </Paper>
        </Grid>
        <Grid item md={2}>
          <Paper>
            <EngineerAssigned engineerAssigned={selectedBug['Assigned To']} />
          </Paper>
        </Grid>
        {/* <Grid item md={4}>
          <Paper>
            <Description description={selectedBug.description} />
          </Paper>
        </Grid> */}
        {/* <Grid item md={4}>
          <Paper>
            <StepsToRecreate recreationSteps={selectedBug.stepsToRecreate} />
          </Paper>
        </Grid> */}
        {/* <Grid item md={2}>
          <Paper>
            <ResolutionStatement
              resolutionStatement={selectedBug.resolutionStatement}
            />
          </Paper>
        </Grid> */}
        <Grid item md={9}>
          <Paper>
            <List bugList={bugs} selectBug={setSelectedBug} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;

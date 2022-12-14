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
import Notes from '../components/Notes';
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
            <Notes notes={notes} />
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
            <List bugList={bugs} selectBug={setSelectedBug} getNotes={setNotes} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;

import React, { useState, useContext } from 'react';
import NavBar from '../components/NavBar';
import { Grid, TextField, Box, MenuItem, Button } from '@mui/material'
import UserContext from '../UserContext';

const severityList = [
  {value:'Typo', label:'Typo'}, {value:'Low', label:'Low'}, {value:'Serious', label:'Serious'}, {value:'Critical', label:'Critical'}, {value:'ShowStopper', label:'ShowStopper'}
]
const intialInputs = {
  title:'',
  //severity:'',
  app:'',
  appVer:'',
  platform:'',
  engineer:'',
  description:'',
  stepsToRecreate:'',
  resolutionStatement:''
}


function AddBug() {
  const { user, setUser } = useContext(UserContext);
  const [inputs, setInputs] = useState(intialInputs)
  const [severity, setSeverity] = useState('')

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputs({ ...inputs, [id]:value })
  }
  const severityChange = (e) => {
    setSeverity(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const totalInputs = {...inputs, severity, user}
    console.log(totalInputs)
    fetch('/addBug', {
      method:'POST', 
      headers:{ 'Content-Type': 'application/json' },
      body: JSON.stringify(totalInputs)
    }).then(res => {
      // received the record created and attach it to the list
    })
  }

  return (    
    <div>
     <NavBar />
     {user}
      <div>
        <Box component="form" sx={{'& .MuiTextField-root': { m: 1 }}} autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField required fullWidth id="title" size="small" label="Title" variant="filled"  value={inputs.title} onChange={handleInputChange} />

              <TextField id="severity" select fullWidth size="small" label="Severity" variant="filled" value={severity} onChange={severityChange}>
               {severityList.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
              </TextField>

              <TextField id="app" fullWidth size="small" label="App" variant="filled" onChange={handleInputChange} value={inputs.app} />
              <TextField id="appVer" fullWidth size="small" label="App Version" variant="filled" onChange={handleInputChange} value={inputs.appVer} />
              <TextField id="platform" fullWidth size="small" label="Platform" variant="filled" onChange={handleInputChange} value={inputs.platform} />
              <TextField id="engineer" fullWidth size="small" label="Assign Engineer" variant="filled" onChange={handleInputChange} value={inputs.engineer} />
            </Grid>
            <Grid item xs={8}>
              <TextField id="description" size="small" label="Description" variant="filled" style={{width:'90%'}} onChange={handleInputChange} value={inputs.description} />
              <TextField multiline rows={6} id="stepsToRecreate" size="small" label="Steps to Recreate" variant="filled" style={{width:'90%'}} onChange={handleInputChange} value={inputs.stepsToRecreate} />
              <TextField multiline rows={5} id="resolutionStatement" size="small" label="Resolution Statement" variant="filled" style={{width:'90%'}} onChange={handleInputChange} value={inputs.resolutionStatement} />
              <Button type="submit" onClick={handleFormSubmit}>Create new Bug</Button>
            </Grid>
            {/* <Grid item xs={4}>xs=4</Grid>
            <Grid item xs={8}>xs=8</Grid> */}
          </Grid>
          
        </Box>
      </div>
    </div>
  )
}

export default AddBug


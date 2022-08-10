import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormControl, TextField, Button } from '@mui/material';
import NavBar from '../components/NavBar';

const initialCredential = {
  username: "",
  password: "",
};

const LogIn_SignUp = () => {
  const [credential, setCredential] = useState(initialCredential);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCredential({ ...credential, [id]:value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(credential) // post request to login endpoint
  }

  return (
    <>
      <NavBar />

      <div style={{textAlign:'center'}}>
        <FormControl variant="standard">
          <TextField id="username" value={credential.username} onChange={handleInputChange} label="User Name" variant="standard" />
          <TextField id="password" type="password" value={credential.password} onChange={handleInputChange} label="Password" variant="standard" />
          <Button type="submit" onClick={handleFormSubmit}>Sign In</Button>
          <Link to='/signup'> Sign up for an account: </Link>
        </FormControl>
      </div>
    </>
  )
}

export default LogIn_SignUp 
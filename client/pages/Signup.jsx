import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormControl, TextField, Button } from '@mui/material';
import NavBar from '../components/NavBar';

const initialCredential = {
  username: "",
  password: "",
  passwordConfirm:""
};

const SignUp = () => {
  const [credential, setCredential] = useState(initialCredential);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCredential({ ...credential, [id]:value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //if(credential.password !==)
    console.log(credential) // post request to login endpoint
  }

  return (
    <>
      <NavBar />

      <div style={{textAlign:'center'}}>
        <FormControl variant="standard">
          <TextField id="username" value={credential.username} onChange={handleInputChange} label="Create User Name" variant="standard" />
          <TextField id="password" type="password" value={credential.password} onChange={handleInputChange} label="Password" variant="standard" />
          <TextField id="passwordConfirm" type="passwordConfirm" value={credential.passwordConfirm} onChange={handleInputChange} label="Re-Enter Password" variant="standard" />
          <Button type="submit" onClick={handleFormSubmit}>Create Account</Button>
        </FormControl>
      </div>
    </>
  )
}

export default SignUp 
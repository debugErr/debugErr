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
  const [errText, setErrText] = useState('')

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCredential({ ...credential, [id]:value })
    setErrText('')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(!credential.username || !credential.password || !credential.passwordConfirm) {
      setErrText('Please enter valid input')
    } else if(credential.password !== credential.passwordConfirm){
      setErrText('Password Not Matching')
    } else {
      console.log(credential) // post request to login endpoint
    }
  }

  return (
    <>
      <NavBar />

      <div style={{textAlign:'center'}}>
        <FormControl variant="standard">
          <TextField required id="username" value={credential.username} onChange={handleInputChange} label="Create User Name" variant="standard" />
          <TextField required id="password" type="password" value={credential.password} onChange={handleInputChange} label="Password" variant="standard" />
          <TextField required id="passwordConfirm" type="password" value={credential.passwordConfirm} onChange={handleInputChange} label="Re-Enter Password" variant="standard" />
          <Button type="submit" onClick={handleFormSubmit}>Create Account</Button>
          <div style={{color:'red'}}>{errText}</div>
        </FormControl>
      </div>
    </>
  )
}

export default SignUp 
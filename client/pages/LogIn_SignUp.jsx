import React, { useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FormControl, TextField, Button } from '@mui/material';
import NavBar from '../components/NavBar';
import UserContext from '../UserContext';

const initialCredential = {
  username: "",
  password: "",
};

const LogIn_SignUp = () => {
  const { user, setUser } = useContext(UserContext);
  const [credential, setCredential] = useState(initialCredential);
  const [errText, setErrText] = useState('')

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCredential({ ...credential, [id]:value })
    setErrText('')
  }

  const handleFormSubmit = (e) => {
    console.log('🔴🟠🟡🟢🔵🟣 | file: LogIn_SignUp.jsx | line 45 | handleFormSubmit | e', e);
    e.preventDefault();
    if(!credential.username || !credential.password) {
      setErrText('Please enter valid input')
    } else {
      console.log("CREDENTIAL", credential) 
      console.log('🔴🟠🟡🟢🔵🟣 | file: LogIn_SignUp.jsx | line 29 | handleFormSubmit | credential', credential);
      // post request to login endpoint
      fetch('/login', {
        method:'POST', 
        headers:{ 'Content-Type': 'application/json' },
        body: JSON.stringify(credential)
      }).then(res => {
        // redirection
        if(res.status === 200) {
          // ======= SAVE USER DATA ==========
          setUser('some user')  // <<<<<<<<<<<< HERE
          //window.location.href = '/'
        }
      })
    }
  }

  return (
    <>
      <NavBar />

      <div style={{textAlign:'center'}}>
        {user && (<Navigate to='/' replace={true} />)}
        <FormControl variant="standard">
          <TextField required id="username" value={credential.username} onChange={handleInputChange} label="User Name" variant="standard" />
          <TextField required id="password" type="password" value={credential.password} onChange={handleInputChange} label="Password" variant="standard" />
          <Button type="submit" onClick={handleFormSubmit}>Sign In</Button>
          <div style={{color:'red'}}>{errText}</div>
          <br />
          <Link to='/signup'> Sign up for an account: </Link>
        </FormControl>
      </div>
    </>
  )
}

export default LogIn_SignUp 
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import UserContext from '../UserContext';

function NavBar() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link to='/'><Button variant="text">debugErr</Button></Link>
      <div style={{ display: 'flex' }}>
        {user ? (
          <Link to='/addBug'><Button variant="text">Add New Bug</Button></Link>
        ): (<></>)}
        
        {user ? (
          <Button variant="text" onClick={() => setUser(null)}>Sign Out</Button>
        ) : (
          <Link to='/login'><Button variant="text">Sign In</Button></Link>
        )}
        
      </div>
    </div>
  );
}

export default NavBar;

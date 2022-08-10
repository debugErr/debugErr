import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function NavBar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link to='/'><Button variant="text">debugErr</Button></Link>
      <div style={{ display: 'flex' }}>
        <Link to='/addBug'><Button variant="text">Add New Bug</Button></Link>
        <Link to='/login'><Button variant="text">Sign In</Button></Link>
      </div>
    </div>
  );
}

export default NavBar;

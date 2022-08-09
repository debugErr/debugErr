import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link to='/'>debugErr</Link>
      <div style={{ display: 'flex' }}>
        <Link to='/addBug'>Add New Bug</Link>
        <Link to='/login'>Sign In</Link>
      </div>
    </div>
  );
}

export default NavBar;

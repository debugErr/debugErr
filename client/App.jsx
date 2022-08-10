import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UserContext from './UserContext';
import Dashboard from './pages/DashboardContainer';
import LogIn_SignUp from './pages/LogIn_SignUp';
import SignUp from './pages/SignUp';
import AddBug from './pages/AddBug';

function App() {
  const [user, setUser] = useState('user login object');
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser])

  const element = (
    <div>
      
      <BrowserRouter>
      <UserContext.Provider value={providerValue}>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path='addBug' element={<AddBug />} />
          <Route path='login' element={<LogIn_SignUp />} />
          <Route path='signup' element={<SignUp />} />
        </Routes>
      </UserContext.Provider>
      </BrowserRouter>
      
    </div>
  );
  return element;
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/DashboardContainer';
import LogIn_SignUp from './pages/LogIn_SignUp';
import SignUp from './pages/SignUp';
import AddBug from './pages/AddBug';

function App() {
  const element = (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path='addBug' element={<AddBug />} />
          <Route path='login' element={<LogIn_SignUp />} />
          <Route path='signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
  return element;
}

export default App;

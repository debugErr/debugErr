import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/DashboardContainer';
import LogIn_SignUp from './pages/LogIn_SignUp';
import AddBug from './pages/AddBug';
import NavBar from './components/NavBar';

function App() {
  const element = (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/"> */}

          {/* <Route element={<NavBar />}> */}
            <Route index element={<Dashboard />} />
            <Route path='addBug' element={<AddBug />} />
          {/* </Route> */}
          <Route path='login' element={<LogIn_SignUp />} />
          {/* <Route path='addBug' element={<AddBug />} />
              <Route path=':bugId' element={<BugDetails />} /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
  return element;
}

export default App;

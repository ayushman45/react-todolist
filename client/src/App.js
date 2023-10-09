import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

import Container from './Component/Container';
import Dashboard from './Component/Dashboard';
import NotFound from './Component/NotFound';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usr, setUsr] = useState({});
  const properties={
      isLoggedIn: isLoggedIn,
      setIsLoggedIn: setIsLoggedIn,
      usr: usr,
      setUsr: setUsr,
  }
  return (
      <Router>
          <Routes>
              <Route path='/' element={<Container properties={properties}/>} />
              <Route path='/dashboard' element={<Dashboard properties={properties}/>} />
              <Route path='*' element={<NotFound />} />
          </Routes>
      </Router>
  );
}

export default App;

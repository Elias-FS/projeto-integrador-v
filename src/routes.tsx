import React from 'react';

import Login from './pages/Login';
import SignUp from './pages/SignUp';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Rotas = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/signup" Component={SignUp} />
        </Routes>
      </Router>
    );
  };
  
  export default Rotas;
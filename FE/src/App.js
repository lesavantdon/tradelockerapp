import React from 'react';
import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('authToken');

  return (
    <Router>
      <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />} />
      <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [server, setServer] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Call your backend to authenticate the user
      const response = await axios.post('http://localhost:5000/api/auth/login', { email,
      password,
      server,
      
       });
      const { token } = response.data;
      localStorage.setItem('authToken', token);
      window.location.href = "/dashboard"; 
      onLogin();
    } catch (err) {
      setError('Invalid login credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        
        <input type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} required />
        
        <input type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} required />
        
        <input type="server" 
        placeholder="server" 
        value={server}
        onChange={(e) => setServer(e.target.value)} required />
        
        
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;

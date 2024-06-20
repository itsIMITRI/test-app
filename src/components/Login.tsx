import React, { useState } from 'react';
import './main-style.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { Button, TextField } from '@mui/material';
import Title from './Title';

const Login: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (userName === 'admin' && password === 'password') {
      const cookies = new Cookies();
      cookies.set('isLoggedIn', 'true', { path: '/' });
      navigate('/');
    } else {
      setError(true);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin();
  };

  return (
    <div className="container">
      <Title label="Login" />
      <form className="form-container" onSubmit={handleSubmit}>
        <TextField
          label="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          error={error}
        />
        <TextField
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error}
          helperText={error ? 'Incorrect username or password' : ''}
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;

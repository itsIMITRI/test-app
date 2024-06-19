import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { Button, TextField, Typography } from '@mui/material';

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
      <Typography variant="h4" mb={2} sx={{ color: 'black' }}>
        Bejelentkezés
      </Typography>
      <form className="form-container" onSubmit={handleSubmit}>
        <TextField
          label="Felhasználó név"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          error={error}
        />
        <TextField
          type="password"
          label="Jelszó"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error}
          helperText={error ? 'Hibás bejelentkezési adatok!' : ''}
        />
        <Button variant="contained" type="submit">
          Bejelentkezés
        </Button>
      </form>
    </div>
  );
};

export default Login;

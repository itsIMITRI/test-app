import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

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

  return (
    <div className="container">
      <input
        className="input-element"
        type="text"
        placeholder="Felhasználó név"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        className="input-element"
        type="password"
        placeholder="Jelszó"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>
        Bejelentkezés
      </button>
      {error && <div className="error-label">Hiba a bejelentkezés során!</div>}
    </div>
  );
};

export default Login;

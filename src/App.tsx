import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import UserList from './components/UserList';
import Login from './components/Login';
import AuthChecker from './components/AuthChecker';

const App: React.FC = () => {
  const isLoginPage = window.location.pathname.endsWith('/login');
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {isLoginPage && <h1>Welcome to the Test App</h1>}
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </header>
      </div>
      <AuthChecker />
    </Router>
  );
};

export default App;

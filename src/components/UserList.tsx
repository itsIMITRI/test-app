import React from 'react';
import { Button } from '@mui/material';
import './main-style.css';
import Title from './Title';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { Typeahead } from 'react-bootstrap-typeahead';

interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
  { id: 4, name: 'Robert Brown' },
];

const UserList: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const cookies = new Cookies();
    cookies.set('isLoggedIn', false, { path: '/' });
    navigate('/login');
  };
  return (
    <div className="container">
      <Title label="Filter panel" />
      <Typeahead
        id="users"
        placeholder="Users"
        labelKey="name"
        options={users}
        style={{ width: 300 }}
      />
      <Button
        variant="contained"
        sx={{ marginTop: '16px' }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserList;

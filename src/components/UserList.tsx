import React from 'react';
import { Autocomplete, Button, TextField } from '@mui/material';
import './main-style.css';
import Title from './Title';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

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
      <Autocomplete
        disablePortal
        options={users}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Users" />}
        getOptionLabel={(user) => user.name}
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

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const AuthChecker: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = cookies.get('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  return <></>;
};

export default AuthChecker;

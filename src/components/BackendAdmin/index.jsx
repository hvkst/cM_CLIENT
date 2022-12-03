import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../consts';
import { UserContext } from '../../context/UserContext';
import CreateUserForm from '../CreateUserForm';

// const BASE_URL = process.env.REACT_APP_BASE_URL;

function BackendAdmin() {
  const { user, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await fetch(BASE_URL + '/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      logoutUser();
      navigate('/');
    } catch (error) {
      console.warn(error.message);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else if (user) {
      if (!user.isAdmin) {
        navigate('/backenduser');
      }
    }
  }, [user, navigate]);

  return (
    <>
      {user && (
        <>
          <h1>BackendAdmin</h1>
          <hr />
          <CreateUserForm />
        </>
      )}
    </>
  );
}

export default BackendAdmin;

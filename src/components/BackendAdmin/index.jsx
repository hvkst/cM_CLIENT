import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { BASE_URL } from '../../consts';
import { UserContext } from '../../context/UserContext';

const BASE_URL = process.env.REACT_APP_BASE_URL;

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
    }
  }, [user, navigate]);

  if (user.isAdmin === true) {
    return (
      <>
        <h1>BackendAdmin</h1>
        {user && <h1>Hello there {user.username} </h1>}
        <button onClick={logout}>Logout</button>
      </>
    );
  }

  return (
    <>
      <h1>You shouldn´t be here, this is for Admins</h1>
      {user && <h1> {user.username} </h1>}
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default BackendAdmin;

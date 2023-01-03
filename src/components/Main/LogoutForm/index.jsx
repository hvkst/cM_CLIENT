import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import { Navigate, Link } from 'react-router-dom';

import { LogLink, LogoutFormContainer } from './LogoutForm.style';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function LogoutForm() {
  const { user, logoutUser } = useContext(UserContext);

  const logout = async () => {
    try {
      await fetch(BASE_URL + '/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      logoutUser();
      Navigate('/');
    } catch (error) {
      console.warn(error.message);
    }
  };
  return (
    <LogoutFormContainer>
      {user ? (
        <div>
          <p style={{ color: 'red' }}>
            {user.username}, {user.isAdmin ? 'Admin' : 'User'}
          </p>
          <button onClick={logout} color="transparent" label="logout">
            logout
          </button>
        </div>
      ) : (
        <div>
          <LogLink to={'/login'}>Login</LogLink>
        </div>
      )}
    </LogoutFormContainer>
  );
}
export default LogoutForm;

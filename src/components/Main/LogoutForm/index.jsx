import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import { useNavigate } from 'react-router-dom';

import { LogLink, LogoutFormContainer } from './LogoutForm.style';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function LogoutForm() {
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

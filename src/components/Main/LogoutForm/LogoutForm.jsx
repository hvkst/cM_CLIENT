import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton, Popover, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { LogoutFormContainer } from './LogoutForm.style';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function LogoutForm() {
  const [whoIsLoggedIn, setWhoIsLoggedIn] = useState('Log in');
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
      setWhoIsLoggedIn('Log in');
    } catch (error) {
      console.warn(error.message);
    }
  };

  useEffect(() => {
    user && setWhoIsLoggedIn(`Logged in as ${user.username} ${user.isAdmin ? ', Admin' : ''}`);
  }, [user]);

  return (
    <LogoutFormContainer>
      <Tooltip title={whoIsLoggedIn}>
        {user ? (
          <IconButton onClick={logout}>
            <LogoutIcon />
          </IconButton>
        ) : (
          <LoginPopover />
        )}
      </Tooltip>
    </LogoutFormContainer>
  );
}
export default LogoutForm;

// <IconButton component={Link} to="/login">
//           <LoginIcon />
//       </IconButton>

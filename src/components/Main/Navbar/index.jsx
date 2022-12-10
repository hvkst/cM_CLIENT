import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';

import Button from '@mui/material/Button';
import { styled } from '@mui/system';

import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function Navbar() {
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
    <>
      <CustomNavbar>
        {user ? (
          <div>
            <p>{user.username}</p>
            <p>{user.isAdmin ? 'Admin' : 'User'}</p>
            <Button onClick={logout}>Logout</Button>{' '}
          </div>
        ) : (
          <div>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/signup'}>Signup</NavLink>
          </div>
        )}
        <div>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/adminbackend'}>A-Backend</NavLink>
          <NavLink to={'/userbackend'}>U-Backend</NavLink>|<i class="fa-solid fa-user"></i>|
        </div>
      </CustomNavbar>
      <Outlet />
    </>
  );
}
export default Navbar;

const CustomNavbar = styled('div')`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  & * {
    margin: 5px 20px 0 20px;
  }
  & div {
    display: flex;
    justify-content: flex-start;
    & * {
      margin: 5px 20px 0 0;
    }
  }
`;

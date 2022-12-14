import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
  return (
    <>
      <CustomNavbar>
        <NavLink to={'/login'}>Login</NavLink>
        <NavLink to={'/signup'}>Signup</NavLink>
      </CustomNavbar>
      <Outlet />
    </>
  );
}
export default Navbar;

const CustomNavbar = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid grey;
  > * {
    margin: 5px 20px 0 0;
  }
`;

import React, { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from './Navbar.style';
import LogoImg from './logo.png';
import LogoutForm from '../LogoutForm/LogoutForm';
import { UserContext } from '../../../context/UserContext';
// import { useTheme } from '@mui/material';

function Navbar() {
  const { user } = useContext(UserContext);

  const [extendNavbar, setExtendNavbar] = useState(false);

  // const theme = useTheme();

  return (
    <>
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              <NavbarLink to="/"> Home</NavbarLink>
              <NavbarLink to="/products"> Products</NavbarLink>
              <NavbarLink to="/contactform"> Contact Us</NavbarLink>
              <NavbarLink to="/about"> About Us</NavbarLink>
              {user && user.isAdmin && <NavbarLink to="/adminbackend"> Dashboard</NavbarLink>}
              {user && !user.isAdmin && <NavbarLink to="/userbackend"> Dashboard</NavbarLink>}

              <OpenLinksButton
                onClick={() => {
                  setExtendNavbar((curr) => !curr);
                }}
              >
                {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
              </OpenLinksButton>
            </NavbarLinkContainer>
          </LeftContainer>
          <RightContainer>
            <Logo src={LogoImg}></Logo>
            <LogoutForm />
          </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
          <NavbarExtendedContainer>
            <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
            <NavbarLinkExtended to="/products"> Products</NavbarLinkExtended>
            <NavbarLinkExtended to="/contact"> Contact Us</NavbarLinkExtended>
            <NavbarLinkExtended to="/about"> About Us</NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
      {/* <LogoutForm /> */}
      <Outlet />
    </>
  );
}

export default Navbar;

// import { useContext } from 'react';
// import { UserContext } from '../../../context/UserContext';

// import Button from '@mui/material/Button';
// import { styled } from '@mui/system';

// import { NavLink, Outlet, useNavigate } from 'react-router-dom';

// const BASE_URL = process.env.REACT_APP_BASE_URL;

// function Navbar() {
//   const { user, logoutUser } = useContext(UserContext);
//   const navigate = useNavigate();
//   const logout = async () => {
//     try {
//       await fetch(BASE_URL + '/auth/logout', {
//         method: 'POST',
//         credentials: 'include',
//       });
//       logoutUser();
//       navigate('/');
//     } catch (error) {
//       console.warn(error.message);
//     }
//   };

//   return (
//     <>
//       <CustomNavbar>
//         {user ? (
//           <div>
//             <p>{user.username}</p>
//             <p>{user.isAdmin ? 'Admin' : 'User'}</p>
//             <Button onClick={logout}>Logout</Button>{' '}
//           </div>
//         ) : (
//           <div>
//             <NavLink to={'/login'}>Login</NavLink>
//             <NavLink to={'/signup'}>Signup</NavLink>
//           </div>
//         )}
//         <div>
//           <NavLink to={'/'}>Home</NavLink>
//           <NavLink to={'/portfolio'}>Portfolio</NavLink>
//           <NavLink to={'/adminbackend'}>A-Backend</NavLink>
//           <NavLink to={'/userbackend'}>U-Backend</NavLink>
//         </div>
//       </CustomNavbar>
//       <Outlet />
//     </>
//   );
// }
// export default Navbar;

// const CustomNavbar = styled('div')`
//   width: 100vw;
//   display: flex;
//   justify-content: space-between;
//   border-bottom: 1px solid grey;
//   background-color: aliceblue;
//   & * {
//     margin: 5px 20px 10px 20px;
//   }
//   & div {
//     display: flex;
//     justify-content: flex-start;
//     & * {
//       margin: 5px 20px 0 0;
//     }
//   }
// `;

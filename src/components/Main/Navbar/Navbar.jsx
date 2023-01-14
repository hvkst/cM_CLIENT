import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import LogoutForm from '../LogoutForm/LogoutForm';
import AlertSlide from '../AlertSlide/AlertSlide';
import { ErrorContext } from '../../../context/ErrorContext';

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
  Footer,
} from './Navbar.style';

function Navbar() {
  const { user } = useContext(UserContext);
  const { error } = useContext(ErrorContext);

  const [extendNavbar, setExtendNavbar] = useState(false);

  const toggleNav = () => {
    setExtendNavbar((curr) => !curr);
  };

  return (
    <>
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              <NavbarLink to="/"> Home</NavbarLink>
              <NavbarLink to="/contactform"> Contact Us</NavbarLink>
              {user && user.isAdmin && <NavbarLink to="/adminbackend"> Dashboard</NavbarLink>}
              {user && !user.isAdmin && <NavbarLink to="/userbackend"> Dashboard</NavbarLink>}

              <OpenLinksButton onClick={toggleNav}>{extendNavbar ? <>&#10005;</> : <> &#8801;</>}</OpenLinksButton>
            </NavbarLinkContainer>
          </LeftContainer>
          <RightContainer>
            <Logo>
              <img src="/pictures/logo.png" alt="logo" />
            </Logo>
            <LogoutForm />
          </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
          <NavbarExtendedContainer>
            <NavbarLinkExtended onClick={toggleNav} to="/">
              Home
            </NavbarLinkExtended>
            <NavbarLinkExtended onClick={toggleNav} to="/contactform">
              Contact Us
            </NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
      {error && <AlertSlide severity="error" />}

      <Outlet />
      <Footer>
        <IconButton component={Link} to="http://www.github.com" color="primary">
          <GitHubIcon />
        </IconButton>
        <IconButton component={Link} to="http://www.linkedin.com" color="primary">
          <LinkedInIcon />
        </IconButton>
      </Footer>
    </>
  );
}

export default Navbar;

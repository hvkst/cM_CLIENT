import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? 'fit-aontent' : '80px')};
  background-color: #6d00aa;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 60px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 10%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 5%;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: medium;
  font-weight: 500;
  text-decoration: none;
  margin: 10px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  img {
    max-width: 150px;
    height: 80%;
  }
`;

export const OpenLinksButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 35px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const Footer = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: #d6c8df;
  box-shadow: 0px 12px 37px -4px #000000;
  margin-top: 20px;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  left: 0;
  bottom: 0;
  div a {
    text-decoration: none;
    margin-right: 20px;
  }
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoutFormContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px 10px;
  position: absolute;
  right: 0;
`;

export const LogLink = styled(Link)`
  color: red;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

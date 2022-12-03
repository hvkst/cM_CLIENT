import { useContext } from 'react';
import styled from 'styled-components';

import { UserContext } from '../../context/UserContext';

function Homepage() {
  const { user, logoutUser } = useContext(UserContext);
  // console.log(user);
  return <Wrapper>Homepage</Wrapper>;
}
export default Homepage;

const Wrapper = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;

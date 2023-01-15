import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';

// More could be done here ;D

export default function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  return (
    <Wrapper>
      <h3>{error.status}</h3>
      <h3>{error.statusText}</h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: lightpink;
`;

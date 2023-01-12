import { useRouteError } from 'react-router-dom';
// import styled from 'styled-components';

export default function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  return (
    <div>
      <h3>{error.status}</h3>
      <h3>{error.statusText}</h3>
    </div>
  );
}

// const Wrapper = styled.div`
//   width: 100vw;
//   height: 50vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   background-color: lightpink;
// `;

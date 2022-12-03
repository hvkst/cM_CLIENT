import styled from 'styled-components';

function Homepage() {
  return (
    <Wrapper>
      <h2>Homepage</h2>
    </Wrapper>
  );
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

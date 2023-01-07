import styled from 'styled-components';

export const UserData = styled.div`
  & .timeLeftSpan {
    border-bottom: 2px solid black;
    border-color: ${(props) => (props.timeLeft.substring(0, 2) * 1 > 10 ? 'green' : 'red')};
  }
  & p {
    margin: 4px 0;
  }
`;

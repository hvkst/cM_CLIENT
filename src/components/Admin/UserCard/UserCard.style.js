import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserData = styled.div`
  & .timeLeftSpan {
    border-bottom: 2px solid black;
    border-color: ${(props) => (props.timeLeft.substring(0, 2) * 1 > 10 ? 'green' : 'red')};
  }
  & p {
    margin: 4px 0;
  }
`;

export const UserCardLink = styled(Link)`
  text-decoration: none;
`;

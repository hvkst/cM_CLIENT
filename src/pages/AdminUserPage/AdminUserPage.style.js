import styled from 'styled-components';

export const AdminUserPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
`;

export const UserDataContainer = styled.div`
  flex-direction: column;
  border: 1px solid black;
  margin: 10px;
  padding: 10px 10px;
  border-radius: 10px;
  * {
    margin: 5px;
  }
  & .timeLeftSpan {
    padding: 2px;
    border-radius: 4px;
    background-color: ${(props) => (props.timeLeft.substring(0, 2) * 1 > 10 ? 'lightgreen' : 'red')};
    color: ${(props) => (props.timeLeft.substring(0, 2) * 1 > 10 ? '#000' : '#fff')};
  }
`;

import styled from 'styled-components';

export const CommentContainer = styled.div`
  align-self: flex-start;
  display: flex;
  width: 90%;
  justify-content: space-between;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin: 2px;
  margin-left: 20px;
  background-color: ${(props) => (props.isAdmin && 'palevioletred') || 'lightblue'};
  & p {
    margin: 1px;
  }
  & #date {
    font-size: 10px;
    align-self: flex-end;
  }
`;

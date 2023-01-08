import styled from 'styled-components';

export const SingleCommentContainer = styled.div`
  font-size: 12px;
  /* align-self: flex-start; */
  display: flex;
  /* width: 100%; */
  word-break: break-word;
  justify-content: space-between;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin: 2px;
  background-color: ${(props) => (props.commentIsAdmin ? 'lightgreen' : 'lightblue')};

  margin-left: ${(props) => (props.commentIsAdmin ? '20px' : '0')};
  margin-right: ${(props) => (props.commentIsAdmin ? '0' : '20px')};
  background-color: ${(props) => (props.commentIsAdmin ? 'lightgreen' : 'lightblue')};

  & p {
    margin: 2px 5px;
  }
`;

export const NameAndTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  word-break: keep-all;
  & p {
    font-size: 10px;
    align-self: flex-end;
  }
`;

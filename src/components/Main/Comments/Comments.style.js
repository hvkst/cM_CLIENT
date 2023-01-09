import { Box } from '@mui/material';
import styled from 'styled-components';

export const SingleCommentContainer = styled(Box)`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin: 4px;
  margin-left: ${(props) => (props.commentIsAdmin ? '10px' : '0')};
  margin-right: ${(props) => (props.commentIsAdmin ? '0' : '10px')};
  background-color: ${(props) => (props.commentIsAdmin ? 'lightgreen' : 'lightblue')};

  & p {
    margin: 2px 5px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;
export const NameAndTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  & p {
    font-size: 10px;
    align-self: flex-end;
  }
`;

import { Box } from '@mui/material';
import styled from 'styled-components';

export const SingleCommentContainer = styled(Box)`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid lightgrey; */
  padding: 2px;
  border-radius: 5px;
  margin: 5px 0 5px;
  margin-left: ${(props) => (props.comment.isAdmin ? '10px' : '0')};
  margin-right: ${(props) => (props.comment.isAdmin ? '0' : '10px')};
  background-color: ${(props) => (props.comment.isAdmin ? '#d6c8df' : '#F9F6FA')};

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

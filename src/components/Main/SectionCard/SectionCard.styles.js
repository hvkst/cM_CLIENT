import styled from 'styled-components';
import Paper from '@mui/material/Paper';

export const SectionPaper = styled(Paper)`
  padding: 10px;
  margin: 20px 0 20px 20px;
`;

export const CommentsContainer = styled.div`
  width: 300px;
`;

export const DataContainer = styled.div`
  background-color: lightcoral;
  display: flex;
  flex-direction: column;
  margin: 0 20px 20px;
  & p {
    margin-top: 0;
    letter-spacing: 1px;
  }
`;

import styled from 'styled-components';
import Paper from '@mui/material/Paper';

export const SectionPaper = styled(Paper)`
  padding: 10px;
`;

export const InnerSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 10px;
`;

export const CommentsContainer = styled.div`
  /* background-color: bisque; */
  /* width: 100%; */
  width: 300px;
`;

export const DataContainer = styled.div`
  background-color: azure;
  display: flex;
  flex-direction: column;
  /* width: fit-content; */
  margin: 0 20px 20px;
  & p {
    margin-top: 0;
    letter-spacing: 1px;
  }
`;

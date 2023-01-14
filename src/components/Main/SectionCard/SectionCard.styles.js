import styled from 'styled-components';
import Paper from '@mui/material/Paper';

export const SectionPaper = styled(Paper)`
  padding: 10px;
  margin: 20px 0 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommentsContainer = styled.div`
  width: 300px;
  margin: 10px;
`;

export const DataContainer = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0 20px 20px;
  & p {
    margin-top: 0;
    font-size: 16px;
    border-bottom: 1px solid #d6c8df;
  }
  & h4 {
    font-weight: 400;
    font-size: 25px;
    letter-spacing: 1px;
    border-bottom: 1px solid #d6c8df;
  }
`;

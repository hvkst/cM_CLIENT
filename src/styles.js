import { Paper } from '@mui/material';
import styled from 'styled-components';

export const SectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const OptionPaper = styled(Paper)`
  width: 360px;
  word-break: break-all;
  margin: 10px 20px 20px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  & p {
    margin: 0;
    font-size: 1.2em;
  }
`;

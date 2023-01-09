import styled from 'styled-components';
import { Alert } from '@mui/material';

export const UserBackendContainer = styled.div`
  & h1 {
    align-self: flex-end;
    font-size: 16px;
    color: #999;
    margin: 5px;
    text-align: right;
  }
`;

export const UpperContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const UserAlert = styled(Alert)`
  p {
    max-width: 280px;
    word-wrap: break-word;
  }
`;

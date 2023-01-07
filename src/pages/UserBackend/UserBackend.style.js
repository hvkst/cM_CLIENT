import styled from 'styled-components';
import SimplePaper from '../../components/Main/SimplePaper/SimplePaper';

export const UserBackendContainer = styled.div`
  & h1 {
    align-self: flex-end;
    font-size: 16px;
    color: #999;
    margin: 5px;
    text-align: right;
  }
`;
export const UserPaper = styled(SimplePaper)``;

export const UpperContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

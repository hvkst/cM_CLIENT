import styled from 'styled-components';

export const AdminUserPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  flex-wrap: wrap;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

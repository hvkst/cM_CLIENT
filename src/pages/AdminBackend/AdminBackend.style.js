import styled from 'styled-components';

export const PageContainer = styled.div`
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

export const UserCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

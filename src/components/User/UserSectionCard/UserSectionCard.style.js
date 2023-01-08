import styled from 'styled-components';

export const UserBackendContainer = styled.div`
  & h1 {
    align-self: flex-end;
    font-size: 16px;
    color: #999;
    margin: 5px;
    text-align: right;
  }
`;

export const InnerSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: fit-content; */
  /* margin: 10px; */
  & h4 {
    margin-top: 0;
    text-align: right;
    letter-spacing: 1px;
  }
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

export const CommentsContainer = styled.div`
  /* background-color: bisque; */
  /* width: 100%; */
  width: 300px;
`;

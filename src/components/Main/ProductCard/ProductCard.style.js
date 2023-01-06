import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  background-color: rgba(184, 162, 255, 0.8);
  margin: 25px 10px;
  border-radius: 10px;
  /* border: 1px solid rgb(92, 81, 159); */
  h2 {
    margin: 0;
  }
`;

export const Icon = styled.p`
  margin: 20px auto 0;
  /* max-width: 150px; */
  height: auto;
`;

export const Content = styled.p`
  /* color: #fff; */
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px;
`;

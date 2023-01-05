import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  background-color: rgba(184, 162, 255, 0.8);
  margin: 25px 10px;
  border-radius: 10px;
  /* border: 1px solid rgb(92, 81, 159); */
`;

export const Icon = styled.p`
  font-size: 36px;
  margin: 20px auto 0;
  max-width: 50px;
  height: auto;
`;

export const Content = styled.p`
  /* color: #fff; */
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px;
`;

import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  background-color: azure;
  margin: 25px 10px;
  border-radius: 10px;
  border: 1px solid rgb(92, 81, 159);
`;

export const Icon = styled.img`
  margin: 10px auto;
  max-width: 50px;
  height: auto;
`;

export const Content = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px;
`;

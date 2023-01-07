import styled from 'styled-components';
import Box from '@mui/material/Box';
export const SingleProductCardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  min-width: 320px;
  width: ${(props) => props.width};
  background-color: rgba(184, 162, 255, 0.2);
  margin: 25px 10px;
  border-radius: 10px;
  h2 {
    margin: 0;
  }
`;

export const Icon = styled.p`
  margin: 20px auto 0;
  height: auto;
  & svg {
    font-size: 3.5rem;
  }
`;

export const Content = styled.p`
  /* color: #fff; */
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px;
`;

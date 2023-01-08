import styled from 'styled-components';
import Box from '@mui/material/Box';
export const SingleProductCardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  width: ${(props) => props.width};
  background-color: #f5f5dc;
  margin: 25px 10px;
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
  /* font-family: Arial, Helvetica, sans-serif; */
  margin: 20px;
`;

import styled from 'styled-components';
import Box from '@mui/material/Box';
export const SingleProductCardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  width: ${(props) => props.width};
  background-color: #f5f5f5;
  margin: 30px 30px;
  h2 {
    margin: 0;
  }
`;

export const Icon = styled.p`
  margin: 40px auto 0;
  height: auto;
  & svg {
    font-size: 3.5rem;
  }
`;

export const Content = styled.p`
  margin: 2.5em;
`;

import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const HeroContent = styled.div`
  border: 3px solid transparent;
  backdrop-filter: blur(5px) sepia(30%);
  display: block;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;
  transition: all 0.5s ease-out;
  & p {
    color: #fff;
    font-size: 50px;
    font-weight: 700;
    margin: 0;
  }
  &:hover {
    backdrop-filter: none;
    border: 3px solid white;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

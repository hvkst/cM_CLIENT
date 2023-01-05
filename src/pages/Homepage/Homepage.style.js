import styled from 'styled-components';

export const lorem25 =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.';

export const TopSection = styled.section`
  background-color: #3d8b48;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const HeroContent = styled.div`
  border: 3px solid transparent;
  /* backdrop-filter: blur(5px) sepia(30%); */
  background-color: rgba(92, 81, 159, 0.4);
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
    background-color: rgba(92, 81, 159, 0.8);
  }
`;

export const ProductCards = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

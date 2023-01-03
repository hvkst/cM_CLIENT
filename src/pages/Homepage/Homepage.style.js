import styled from 'styled-components';

export const lorem25 =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.';

export const TopSection = styled.section`
  background-color: aqua;
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url('/pictures/lights.jpg');
  background-size: cover;
  background-repeat: no-repeat;
`;

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

export const MidSection = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

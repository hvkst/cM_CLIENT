import { Button, Container } from '@mui/material';
import { styled } from '@mui/system';

function Homepage() {
  return (
    <>
      <TopSection>
        <TopSectionDiv>
          <p>
            Let´s build
            <br /> your dream!
          </p>
        </TopSectionDiv>
        <StartButton variant="contained">Start today</StartButton>
      </TopSection>
    </>
  );
}
export default Homepage;

const TopSection = styled('div')`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url('/pictures/lights.jpg');
  background-size: cover;
  background-repeat: no-repeat;
`;

const TopSectionDiv = styled('div')`
  backdrop-filter: blur(5px); // sepia(30%); // hue-rotate(12deg);
  display: block;
  margin: 10px;
  padding: 10px;
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
  }
`;

const StartButton = styled.Button`
  background-color: red;
  ${TopSectionDiv}:hover & {
  }
`;

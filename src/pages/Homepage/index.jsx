import { Button } from '@mui/material';
import { styled } from '@mui/system';

function Homepage() {
  return (
    <>
      <TopSection>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <TopSectionDiv>
            <p>
              Let's build
              <br /> your dream!
            </p>
          </TopSectionDiv>
          <Button variant="contained" color="secondary" sx={{ alignSelf: 'flex-end' }}>
            Start today
          </Button>
        </div>
      </TopSection>
      <MidSection></MidSection>
    </>
  );
}
export default Homepage;

const TopSection = styled('Section')`
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
  }
`;

const MidSection = styled('Section')`
  height: 1500px;
`;

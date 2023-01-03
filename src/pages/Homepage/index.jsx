import { Button } from '@mui/material';
import { styled } from '@mui/system';
import ProductCard from '../../components/Main/ProductCard';

function Homepage() {
  return (
    <>
      <TopSection>
        {/* <div style={{ display: 'flex', flexDirection: 'column' }}> */}
        <HeroSection>
          <p>
            Let's build
            <br /> your dream!
          </p>
        </HeroSection>
        <Button variant="contained" color="secondary" sx={{ alignSelf: 'flex-end' }}>
          Start today
        </Button>
        {/* </div> */}
      </TopSection>

      <MidSection>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </MidSection>
    </>
  );
}
export default Homepage;

const TopSection = styled('Section')`
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

const HeroSection = styled('div')`
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

const MidSection = styled('Section')`
  height: 1500px;
`;

import ProductCard from '../../components/Main/ProductCard';
import SomeIcon from '../../assets/someIcon.png';
import { TopSection, HeroContainer, HeroContent, MidSection, lorem25 } from './Homepage.style';
import Button from '@mui/material/Button';

function Homepage() {
  return (
    <>
      <TopSection>
        <HeroContainer>
          <HeroContent>
            <p>
              Let's build <br /> your dream
            </p>
          </HeroContent>
          <Button variant="contained">Start Today</Button>
        </HeroContainer>
      </TopSection>

      <MidSection>
        <ProductCard icon={SomeIcon} content={lorem25}></ProductCard>
        <ProductCard icon={SomeIcon} content={lorem25}></ProductCard>
        <ProductCard icon={SomeIcon} content={lorem25}></ProductCard>
      </MidSection>
    </>
  );
}
export default Homepage;

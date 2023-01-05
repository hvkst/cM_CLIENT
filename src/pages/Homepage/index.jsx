import ProductCard from '../../components/Main/ProductCard';
import SomeIcon from '../../assets/someIcon.png';
import { TopSection, HeroContainer, HeroContent, MidSection, lorem25 } from './Homepage.style';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FactCheckIcon from '@mui/icons-material/FactCheck';

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
          <Button component={Link} to="/contactform" variant="contained">
            Start Today
          </Button>
        </HeroContainer>
      </TopSection>

      <MidSection>
        <ProductCard icon={<HomeRepairServiceIcon color="secondary" fontSize="large" />} content={lorem25}></ProductCard>
        <ProductCard icon={<ManageAccountsIcon color="secondary" fontSize="large" />} content={lorem25}></ProductCard>
        <ProductCard icon={<FactCheckIcon color="secondary" fontSize="large" />} content={lorem25}></ProductCard>
      </MidSection>
    </>
  );
}
export default Homepage;

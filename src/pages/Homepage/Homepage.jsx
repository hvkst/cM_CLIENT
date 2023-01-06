import ProductCard from '../../components/Main/ProductCard/ProductCard';
import { TopSection, HeroContainer, HeroContent, ProductCards, lorem25 } from './Homepage.style';
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
            <p>Let's build your dream!</p>
          </HeroContent>
          <Button component={Link} to="/contactform" variant="contained">
            Start Today
          </Button>
        </HeroContainer>
      </TopSection>
      <ProductCards>
        <ProductCard icon={<HomeRepairServiceIcon color="primary" fontSize="large" />} content={lorem25}></ProductCard>
        <ProductCard icon={<ManageAccountsIcon color="primary" fontSize="large" />} content={lorem25}></ProductCard>
        <ProductCard icon={<FactCheckIcon color="primary" fontSize="large" />} content={lorem25}></ProductCard>
      </ProductCards>
    </>
  );
}
export default Homepage;

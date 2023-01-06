import ProductCard from '../../components/Main/ProductCard/ProductCard';
import {
  TopSection,
  HeroContainer,
  HeroOuterContainer,
  HeroContent,
  ProductCardContainer,
  MidSection,
  LowerMidSection,
  ecommerce,
  website,
  maintenance,
  ImageContainer,
} from './Homepage.style';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WebIcon from '@mui/icons-material/Web';

function Homepage() {
  return (
    <>
      <TopSection>
        <HeroOuterContainer>
          <ImageContainer>
            <img src="/pictures/lights.jpg" alt="lights" />
          </ImageContainer>
          <HeroContainer>
            <HeroContent>
              <h2>Let's build your dream!</h2>
              <p>Are you looking to improve your online presence, but not sure where to start?</p>
              <p>Elevate your business and stand out online with our top-quality website development, design, and marketing services.</p>
            </HeroContent>
            <Button component={Link} to="/contactform" variant="outlined" id="herobutton">
              Start Today
            </Button>
          </HeroContainer>
        </HeroOuterContainer>
      </TopSection>
      <MidSection>
        <h2 id="heading">With a variety of products</h2>

        <ProductCardContainer>
          <ProductCard icon={<WebIcon color="primary" fontSize="large" />} heading="Website development" content={website}></ProductCard>
          <ProductCard icon={<FactCheckIcon color="primary" fontSize="large" />} heading="Maintenance" content={maintenance}></ProductCard>
          <ProductCard icon={<ShoppingCartIcon color="primary" fontSize="large" />} heading="E-commerce" content={ecommerce}></ProductCard>
        </ProductCardContainer>
      </MidSection>

      <LowerMidSection>
        <h2 id="heading">We do like money</h2>
        <ProductCardContainer>
          <ProductCard icon={<HomeRepairServiceIcon color="primary" fontSize="large" />} heading="More Content" content="content"></ProductCard>
          <ProductCard icon={<ManageAccountsIcon color="primary" fontSize="large" />} heading="More Content" content="content"></ProductCard>
          <ProductCard icon={<FactCheckIcon color="primary" fontSize="large" />} heading="More Content" content="content"></ProductCard>
        </ProductCardContainer>
      </LowerMidSection>

      <LowerMidSection>
        <h2 id="heading">How it works</h2>
        <ProductCardContainer>
          <ProductCard icon={<HomeRepairServiceIcon color="primary" fontSize="large" />} heading="More Content" content="content"></ProductCard>
          <ProductCard icon={<ManageAccountsIcon color="primary" fontSize="large" />} heading="More Content" content="content"></ProductCard>
          <ProductCard icon={<FactCheckIcon color="primary" fontSize="large" />} heading="More Content" content="content"></ProductCard>
        </ProductCardContainer>
      </LowerMidSection>

      <LowerMidSection>
        <h2 id="heading">Footer</h2>
      </LowerMidSection>
    </>
  );
}
export default Homepage;

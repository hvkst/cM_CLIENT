import ProductCard from '../../components/Main/ProductCard/ProductCard';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WebIcon from '@mui/icons-material/Web';
import Groups3Icon from '@mui/icons-material/Groups3';
import CallIcon from '@mui/icons-material/Call';
import EngineeringIcon from '@mui/icons-material/Engineering';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

import {
  TopSection,
  HeroContainer,
  HeroOuterContainer,
  HeroContent,
  ProductCardsContainer,
  MidSection,
  LowerMidSection,
  ecommerce,
  website,
  maintenance,
  ImageContainer,
  consulting,
  HeadingContainer,
} from './Homepage.style';
import AlertSlide from '../../components/Main/AlertSlide/AlertSlide';

function Homepage() {
  return (
    <div className="content-container">
      <TopSection>
        <HeroOuterContainer>
          <ImageContainer>
            <img src="/pictures/lights.jpg" alt="lights" />
          </ImageContainer>
          <HeroContainer>
            <HeroContent>
              <h2>Let's build your DREAM!</h2>
              <p>Are you looking to improve your online presence, but not sure where to start?</p>
              <p>Elevate your business and stand out online with our top-quality website development, design, and marketing services.</p>
            </HeroContent>
            <Button component={Link} to="/contactform" variant="contained" id="herobutton">
              Start Today
            </Button>
          </HeroContainer>
        </HeroOuterContainer>
      </TopSection>
      <MidSection>
        <HeadingContainer>
          <h2 id="heading">Products & Services</h2>
        </HeadingContainer>

        <ProductCardsContainer>
          <ProductCard icon={<WebIcon color="primary" />} heading="Website development" content={website} width="25%"></ProductCard>
          <ProductCard icon={<FactCheckIcon color="primary" />} heading="Maintenance" content={maintenance} width="25%"></ProductCard>
          <ProductCard icon={<ShoppingCartIcon color="primary" />} heading="E-commerce" content={ecommerce} width="25%"></ProductCard>
        </ProductCardsContainer>
      </MidSection>
      <LowerMidSection>
        <HeadingContainer>
          <h2 id="heading">Consulting</h2>
        </HeadingContainer>
        <ProductCardsContainer>
          <ProductCard
            id="consulting"
            icon={<Groups3Icon color="primary" />}
            heading="Because we know better"
            content={consulting}
            width="50%"
          ></ProductCard>
        </ProductCardsContainer>
      </LowerMidSection>

      <LowerMidSection>
        <HeadingContainer>
          <h2 id="heading">How it works</h2>
        </HeadingContainer>
        <ProductCardsContainer>
          <ProductCard icon={<CallIcon color="primary" />} heading="More Content" content="content"></ProductCard>
          <ProductCard icon={<EngineeringIcon color="primary" />} heading="More Content" content="content"></ProductCard>
          <ProductCard icon={<InsertEmoticonIcon color="primary" />} heading="More Content" content="content"></ProductCard>
        </ProductCardsContainer>
      </LowerMidSection>
    </div>
  );
}
export default Homepage;

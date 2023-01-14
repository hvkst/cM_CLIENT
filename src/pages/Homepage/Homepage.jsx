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
  InnerHeadingContainer,
} from './Homepage.style';

export default function Homepage() {
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
            <Button component={Link} to="/contactform" variant="contained" color="secondary" id="herobutton">
              Start Today
            </Button>
          </HeroContainer>
        </HeroOuterContainer>
      </TopSection>
      <MidSection>
        <HeadingContainer>
          <InnerHeadingContainer position="70%">
            <h2 id="heading">Products & Services</h2>
          </InnerHeadingContainer>
        </HeadingContainer>

        <ProductCardsContainer>
          <ProductCard icon={<WebIcon color="secondary" />} heading="Website development" content={website} width="25%"></ProductCard>
          <ProductCard icon={<FactCheckIcon color="secondary" />} heading="Maintenance" content={maintenance} width="25%"></ProductCard>
          <ProductCard icon={<ShoppingCartIcon color="secondary" />} heading="E-commerce" content={ecommerce} width="25%"></ProductCard>
        </ProductCardsContainer>
      </MidSection>
      <LowerMidSection>
        <HeadingContainer>
          <InnerHeadingContainer position="28%">
            <h2 id="heading">Consulting</h2>
          </InnerHeadingContainer>
        </HeadingContainer>
        <ProductCardsContainer>
          <ProductCard
            id="consulting"
            icon={<Groups3Icon color="secondary" />}
            heading="Because we know better"
            content={consulting}
            width="50%"
          ></ProductCard>
        </ProductCardsContainer>
      </LowerMidSection>

      <LowerMidSection>
        <HeadingContainer>
          <InnerHeadingContainer position="10%">
            <h2 id="heading">How it works</h2>
          </InnerHeadingContainer>
        </HeadingContainer>
        <ProductCardsContainer>
          <ProductCard icon={<CallIcon color="secondary" />} heading="Get in touch" content="content"></ProductCard>
          <ProductCard icon={<EngineeringIcon color="secondary" />} heading="More Content" content="content"></ProductCard>
          <ProductCard icon={<InsertEmoticonIcon color="secondary" />} heading="More Content" content="content"></ProductCard>
        </ProductCardsContainer>
      </LowerMidSection>
    </div>
  );
}

import styled from 'styled-components';
import { device } from '../../utils/mediaQueries';

export const lorem25 =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.';

export const ecommerce =
  "Ready to take your business to the next level with an online store? Our e-commerce development services can help. We'll work with you to build a custom online store that is tailored to your specific needs, integrating payment gateways and configuring shipping and tax options to make the process seamless for both you and your customers";

export const website =
  'Looking to create a new website or revamp your current one? Look no further! Our team of skilled web developers can bring your vision to life, creating a custom website that is tailored to your specific needs and goals. With our development services, you can rest assured that your website will be fast, reliable, and easy to use for both you and your visitors.';

export const maintenance =
  "Don't let your website become outdated or suffer from technical issues. With our website maintenance and support services, you can enjoy peace of mind knowing that your website is always up-to-date and running smoothly. From content updates to bug fixes, we've got you covered.";

export const consulting =
  "Are you looking to improve your online presence, but not sure where to start? Our team of web consultants can help. With years of experience in the industry, we have the knowledge and expertise to assess your current website and online strategy, and provide actionable recommendations on how to improve. Whether you need help with website design, search engine optimization, social media marketing, or any other aspect of your online presence, we're here to help. Let us help you take your business to the next level with our web consulting services.";

export const call =
  "Are you looking to improve your online presence, but not sure where to start? Our team of web consultants can help. With years of experience in the industry, we have the knowledge and expertise to assess your current website and online strategy, and provide actionable recommendations on how to improve. Whether you need help with website design, search engine optimization, social media marketing, or any other aspect of your online presence, we're here to help. Let us help you take your business to the next level with our web consulting services.";

export const TopSection = styled.section`
  box-sizing: border-box;
  border: 0.5rem solid #f9f6fa;
  background-color: #f9f6fa;
  border-radius: 1rem;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.mobile} {
    height: 60vh;
  }
  @media ${device.tablet} {
    height: 75vh;
  }
  @media ${device.laptop} {
    height: 90vh;
  }
`;

export const HeroOuterContainer = styled.div`
  width: 500px;
  aspect-ratio: 1 / 1;
  position: relative;
  margin-right: 12.5rem;

  @media ${device.mobile} {
    width: 200px;
    margin-right: 0;
  }
  @media ${device.tablet} {
    width: 300px;
    margin-right: 0;
  }
  @media ${device.laptop} {
    width: 350px;
  }
`;

export const HeroContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #6d00aa;
  padding: 3.5rem;

  & #herobutton {
    margin: 10px;
    align-self: flex-end;
    border-radius: 0;
    padding: 0.6rem 1.5rem;
  }
  &:after {
    width: 100%;
    height: 100%;
    border: 0.3rem solid #ff6f6f;
    transform: rotate(4deg);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    content: '';
    transition: all 0.5s ease-in-out;
  }
  &:hover:after {
    transform: rotate(0deg);
  }

  @media ${device.mobile} {
    padding: 1.2rem;
  }
  @media ${device.tablet} {
    padding: 1.7rem;
  }
  @media ${device.laptop} {
    padding: 2.5rem;
  }
`;

export const HeroContent = styled.div`
  & h2 {
    color: #fff;
    font-size: 2.5em;
    font-weight: 700;
    margin: 0;
  }
  & p {
    letter-spacing: 1px;
    color: #fff;
    font-size: 1.2em;
    margin: 0;
    margin-top: 10px;
  }

  @media ${device.mobile} {
    & h2 {
      font-size: 1em;
    }
    & p {
      letter-spacing: 0px;
      font-size: 0.6em;
    }
  }
  @media ${device.tablet} {
    & h2 {
      font-size: 1.2em;
    }
    & p {
      letter-spacing: 0px;
      font-size: 0.8em;
    }
  }
  @media ${device.laptop} {
    & h2 {
      font-size: 1.4em;
    }
    & p {
      letter-spacing: 1px;
      font-size: 1em;
    }
  }
`;

export const ImageContainer = styled.div`
  z-index: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  bottom: 10%;

  & img {
    width: 115%;
    height: 115%;
    object-fit: cover;
  }

  @media ${device.mobile} {
    display: none;
  }
  @media ${device.tablet} {
    display: none;
  }
  @media ${device.laptop} {
    width: 100%;
    height: 100%;
    left: 25%;
  }
`;

export const HeadingContainer = styled.div`
  position: relative;
  margin: 40px 0 20px;
  /* &:after {
    width: 100%;
    height: 3%;
    background-color: #009cab;
    position: absolute;
    transform: rotate(0deg);
    right: 0;
    bottom: 25%;
    z-index: -2;
    content: '';
    transition: all 0.5s ease-in-out;
  }

  &:hover:after {
    transform: rotate(0deg);
  } */
`;
export const InnerHeadingContainer = styled.div`
  position: relative;
  &:after {
    width: 6em;
    height: 6em;
    background-color: #ff6f6f;
    position: absolute;
    right: ${(props) => props.position};
    bottom: -1.2em;
    z-index: -1;
    content: '';
    transition: all 0.5s ease-in-out;
    border-radius: 50%;
  }
  #heading {
    font-size: 2.5rem;
    padding: 0 10px;
  }
  @media ${device.mobile} {
    &:after {
      width: 3em;
      height: 3em;
    }
    #heading {
      font-size: 1.2rem;
    }
  }
  @media ${device.tablet} {
    &:after {
      width: 4em;
      height: 4em;
    }
    #heading {
      font-size: 1.6rem;
    }
  }
  @media ${device.laptop} {
    &:after {
      width: 5em;
      height: 5em;
    }
    #heading {
      font-size: 2rem;
    }
  }
`;

export const MidSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const LowerMidSection = styled(MidSection)``;

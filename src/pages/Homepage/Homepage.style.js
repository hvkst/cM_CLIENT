import styled from 'styled-components';

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

export const TopSection = styled.section`
  background-color: #3d8b48;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HeroOuterContainer = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  margin-right: 200px;
`;
// export const HeroInnerborder = styled.div`
//   width: 500px;
//   height: 500px;
//   position: relative;
//   margin-right: 200px;
// `;

export const HeroContainer = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffc071;
  padding: 50px;

  & #herobutton {
    margin: 10px;
    align-self: flex-end;
    border-radius: 0;
    padding: 10px 20px;
    transition: all 0.5s ease-in-out;

    &:hover {
      /* background-color: #3d8b48; */
      border-color: white;
      color: white;
      box-shadow: inset 0 -4em 0 #3d8b48;
    }
  }
  &:after {
    width: 100%;
    height: 100%;
    border: 3px solid white;
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
    transform: rotate(-2deg);
  }
`;

export const HeroContent = styled.div`
  & h2 {
    color: #222;
    font-size: 2.5em;
    font-weight: 700;
    margin: 0;
  }
  & p {
    letter-spacing: 1px;
    color: #222;
    font-size: 1.2em;
    margin: 0;
    margin-top: 10px;
  }
`;

export const ImageContainer = styled.div`
  z-index: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 300px;
  bottom: 60px;

  & img {
    width: 115%;
    height: 115%;
    object-fit: cover;
  }
`;

export const MidSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  #heading {
    font-size: 40px;
    margin: 20px 0 0 0;
    padding: 0 5px;
    box-shadow: inset 0 -0.4em 0 #3d8b48;
    transition: all 0.5s ease-in-out;

    &:hover {
      box-shadow: inset 0 -1.4em 0 #3d8b48;
      color: white;
      /* border-radius: 5px; */
    }
  }
`;

export const ProductCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const LowerMidSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  #heading {
    font-size: 40px;
    margin: 20px 0 0 0;
    padding: 0 5px;
    box-shadow: inset 0 -0.4em 0 #3d8b48;
    transition: all 0.5s ease-in-out;
    border: 0.01em solid transparent;
    border-radius: 0px;
    &:hover {
      box-shadow: inset 0 -0em 0 #3d8b48;
      border: 0.01em solid #3d8b48;
      border-radius: 5px;
    }
  }
`;

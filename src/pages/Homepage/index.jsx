import styled from 'styled-components';

import ProductCard from '../../components/Main/ProductCard';
import SomeIcon from '../../assets/someIcon.png';
import Hero from '../../components/Main/Hero';

const lorem25 =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.';

function Homepage() {
  return (
    <>
      <TopSection>
        <Hero></Hero>
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

const TopSection = styled.section`
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

const MidSection = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

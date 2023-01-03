import Button from '../Button';
import { HeroContainer, HeroContent } from './Hero.style';

function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <p>
          Let's build <br /> your dream
        </p>
      </HeroContent>
      <Button label="Start today" color="transparent" />
    </HeroContainer>
  );
}
export default Hero;

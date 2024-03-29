import { SingleProductCardContainer, Icon, Content } from './ProductCard.style';

export default function ProductCard({ icon, heading, content, width }) {
  return (
    <SingleProductCardContainer sx={{ boxShadow: 5 }} width={width}>
      <Icon className="icon">{icon}</Icon>
      <h2>{heading}</h2>
      <Content>{content}</Content>
    </SingleProductCardContainer>
  );
}

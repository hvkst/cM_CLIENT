import { SingleProductCardContainer, Icon, Content } from './ProductCard.style';

function ProductCard({ icon, heading, content, width }) {
  return (
    <SingleProductCardContainer width={width}>
      <Icon className="icon">{icon}</Icon>
      <h2>{heading}</h2>
      <Content>{content}</Content>
    </SingleProductCardContainer>
  );
}
export default ProductCard;

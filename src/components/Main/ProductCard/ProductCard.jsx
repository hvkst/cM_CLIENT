import { ProductCardContainer, Icon, Content } from './ProductCard.style';

function ProductCard({ icon, heading, content }) {
  return (
    <ProductCardContainer>
      <Icon>{icon}</Icon>
      <h2>{heading}</h2>
      <Content>{content}</Content>
    </ProductCardContainer>
  );
}
export default ProductCard;

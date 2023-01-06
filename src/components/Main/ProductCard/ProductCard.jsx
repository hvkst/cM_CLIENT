import { ProductCardContainer, Icon, Content } from './ProductCard.style';

function ProductCard({ icon, content }) {
  return (
    <ProductCardContainer>
      <Icon>{icon}</Icon>
      <Content>{content}</Content>
    </ProductCardContainer>
  );
}
export default ProductCard;

import { ProductCardContainer, Icon, Content } from './ProductCard.style';

function ProductCard({ icon, content }) {
  return (
    <ProductCardContainer>
      <Icon src={icon} />
      <Content>{content}</Content>
    </ProductCardContainer>
  );
}
export default ProductCard;

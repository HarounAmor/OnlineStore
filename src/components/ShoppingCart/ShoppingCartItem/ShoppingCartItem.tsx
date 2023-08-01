import { CartProductType } from "../../../types/Product";

import {
  ItemContainer,
  Title,
  Image,
  Price,
  QuantityContainer,
  QuantityButton,
  ItemDetails,
} from "./ShoppingCartItem.styles";

interface ShoppingCartItemProps {
  cartProduct: CartProductType;
  addOneItem: (productId: number) => void;
  removeOneItem: (productId: number) => void;
}

export const ShoppingCartItem = ({
  cartProduct,
  removeOneItem,
  addOneItem,
}: ShoppingCartItemProps) => {
  const handleAddOneItem = () => {
    addOneItem(cartProduct.id);
  };

  const handleRemoveOneItem = () => {
    removeOneItem(cartProduct.id);
  };
  return (
    <ItemContainer>
      <Image src={cartProduct.thumbnail} alt={cartProduct.title} />
      <ItemDetails>
        <Title>{cartProduct.title}</Title>
        <Price>{cartProduct.price} €</Price>
        <QuantityContainer>
          <QuantityButton onClick={handleRemoveOneItem}>-</QuantityButton>
          <span>{cartProduct.quantity}</span>
          <QuantityButton onClick={handleAddOneItem}>+</QuantityButton>
        </QuantityContainer>
      </ItemDetails>
    </ItemContainer>
  );
};

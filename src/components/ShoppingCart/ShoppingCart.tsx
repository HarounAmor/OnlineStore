import {
  CloseButton,
  PurchaseButton,
  ShoppingCartContainer,
  ShoppingCartContent,
} from "./ShoppingCart.styles";
import { CartProductType } from "../../types/Product";
import { ShoppingCartItem } from "./ShoppingCartItem";

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartProductType[];
  addOneItem: (productId: number) => void;
  removeOneItem: (productId: number) => void;
  isCartEmpty: boolean;
}

export const ShoppingCart = ({
  isOpen,
  onClose,
  cart,
  addOneItem,
  removeOneItem,
  isCartEmpty,
}: ShoppingCartProps) => {
  const handleClose = () => {
    onClose();
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePurchase = () => {
    window.alert("Purchase done!");
  };

  return (
    <ShoppingCartContainer isOpen={isOpen}>
      <ShoppingCartContent>
        <CloseButton onClick={handleClose}>X</CloseButton>
        {cart.map((cartProduct: CartProductType, index: number) => (
          <ShoppingCartItem
            key={index}
            cartProduct={cartProduct}
            addOneItem={addOneItem}
            removeOneItem={removeOneItem}
          />
        ))}
      </ShoppingCartContent>
      {!isCartEmpty && (
        <PurchaseButton onClick={handlePurchase}>
          Buy Now (Total is {totalPrice.toFixed(2)} € )
        </PurchaseButton>
      )}
    </ShoppingCartContainer>
  );
};

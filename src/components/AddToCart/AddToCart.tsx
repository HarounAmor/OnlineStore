import { styled } from "styled-components";
import { Button } from "../Button";

interface AddToCartProps {
  isDefault: boolean;
  addToCart: () => void;
  removeFromCart: () => void;
}

const AddToCartWrapper = styled.div`
  bottom: 8px;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;

export const AddToCart = ({
  isDefault,
  addToCart,
  removeFromCart,
}: AddToCartProps) => {
  return (
    <AddToCartWrapper>
      {isDefault ? (
        <Button onClick={addToCart}>Add to cart</Button>
      ) : (
        <ButtonWrapper>
          <Button onClick={removeFromCart}>-</Button>
          <Button onClick={addToCart}>+</Button>
        </ButtonWrapper>
      )}
    </AddToCartWrapper>
  );
};

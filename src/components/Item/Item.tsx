import { AddToCart } from "../AddToCart/AddToCart";
import {
  Description,
  ItemContainer,
  Stats,
  Stat,
  Title,
  Image,
} from "./Item.styles";

interface ItemProps {
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  imageSrc: string;
  isAddedToCart: boolean;
  addToCart: () => void;
  removeFromCart: () => void;
}

export const Item = ({
  title,
  description,
  price,
  rating,
  stock,
  imageSrc,
  isAddedToCart,
  addToCart,
  removeFromCart,
}: ItemProps) => {
  return (
    <>
      <ItemContainer>
        <Image src={imageSrc} alt={title} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Stats>
          <Stat>Price: {price}€</Stat>
          <Stat>Stock: {stock}</Stat>
          <Stat>Rating: {rating}</Stat>
        </Stats>
        <AddToCart
          isDefault={isAddedToCart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </ItemContainer>
    </>
  );
};

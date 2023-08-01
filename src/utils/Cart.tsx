import { CartProductType, ProductType } from "../types/Product";

export const convertProductToCartProduct = (
  product: ProductType,
  quantity: number
): CartProductType => {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    thumbnail: product.thumbnail,
    quantity: quantity,
  };
};

export type ProductType = {
  title: string;
  id: number;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type CartProductType = Pick<
  ProductType,
  "id" | "title" | "price" | "thumbnail"
> & {
  quantity: number;
};

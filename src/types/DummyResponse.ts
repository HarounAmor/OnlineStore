import { ProductType } from "./Product";

export type DummyResponseType = {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
};

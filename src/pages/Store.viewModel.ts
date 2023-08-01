import { useEffect, useMemo, useState } from "react";
import { CartProductType, ProductType } from "../types/Product";
import { DummyResponseType } from "../types/DummyResponse";
import { convertProductToCartProduct } from "../utils/Cart";

export const useStoreViewModel = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<CartProductType[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const apiUrl = "https://dummyjson.com/products";

  const fetchProducts = async () => {
    try {
      const response = await fetch(apiUrl);
      const data: DummyResponseType = await response.json();
      setProducts(data.products);
    } catch (error) {
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (productId: number) => {
    if (!productId && !products) return;

    const product = products.find((item) => item.id === productId);
    if (!product) return;
    if (product.stock === 0) return;

    if (cart.find((item) => item.id === productId)) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, convertProductToCartProduct(product, 1)]);
    }
    setProducts((prevProducts) => {
      const newProducts = prevProducts.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            stock: item.stock - 1,
          };
        }
        return item;
      });
      return newProducts;
    });
  };

  const removeFromCart = (productId: number) => {
    if (cart.find((item) => item.id === productId)) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
      setCart((prevCart) => prevCart.filter((item) => item.quantity > 0));
    }

    setProducts((prevProducts) => {
      const newProducts = prevProducts.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            stock: item.stock + 1,
          };
        }
        return item;
      });
      return newProducts;
    });
  };

  const closeCart = () => {
    if (isCartOpen) setIsCartOpen(false);
  };

  const openCart = () => {
    if (!isCartOpen) setIsCartOpen(true);
  };

  const isCartEmpty = useMemo(() => cart.length === 0, [cart]);

  return {
    addToCart,
    cart,
    products,
    removeFromCart,
    isCartOpen,
    openCart,
    closeCart,
    isCartEmpty,
  };
};

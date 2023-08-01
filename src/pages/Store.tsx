import { Button } from "../components/Button";
import { Item } from "../components/Item/Item";
import { ShoppingCart } from "../components/ShoppingCart";
import { ProductType } from "../types/Product";
import { ItemsContainer, PageHeader } from "./Store.styles";
import { useStoreViewModel } from "./Store.viewModel";

export const Store = () => {
  const {
    products,
    addToCart,
    removeFromCart,
    cart,
    openCart,
    isCartOpen,
    closeCart,
    isCartEmpty,
  } = useStoreViewModel();

  return (
    <>
      <PageHeader>
        <h1>Store</h1>
        <Button onClick={openCart} isDisabled={isCartEmpty}>
          Open Cart
        </Button>
      </PageHeader>
      <ItemsContainer>
        {products.length > 0 &&
          products.map((product: ProductType, index: number) => (
            <Item
              key={index}
              title={product.title}
              description={product.description}
              stock={product.stock}
              rating={product.rating}
              price={product.price}
              imageSrc={product.thumbnail}
              isAddedToCart={
                cart.find((item) => item.id === product.id) ? false : true
              }
              addToCart={() => addToCart(product.id)}
              removeFromCart={() => removeFromCart(product.id)}
            />
          ))}
      </ItemsContainer>
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={closeCart}
        cart={cart}
        addOneItem={addToCart}
        removeOneItem={removeFromCart}
        isCartEmpty={isCartEmpty}
      />
    </>
  );
};

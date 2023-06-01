import React, { createContext, useState } from "react";

function createInitialCart() {
  return [] as CartItemInterface[];
}

export const CartContext = createContext({} as CartContextInterface);

export const CartContextProvider = ({ children }: React.PropsWithChildren) => {
  const [cart, setCart] = useState(createInitialCart());

  const updateCart = (cartItem: CartItemInterface) => {
    // check if item is already in cart
    const itemInCart = cart.find(
      (item: { type: string }) => item.type === cartItem.type
    );

    // if item is not in cart, add it
    if (!itemInCart) {
      setCart([...cart, cartItem]);
    } else {
      
      // update cart
      const updatedCart = cart.map((item: CartItemInterface) => {
        if (item.type === cartItem.type) {
          return cartItem;
        }
        return item;
      });

      // update cart state
      setCart(updatedCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

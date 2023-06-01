import React, { createContext, useState } from "react";

interface CartItemInterface {
  type: string;
  cost: number;
  quantity: number;
}

function createInitialCart() {
  return [] as CartItemInterface[];
}

interface CartContextInterface {
  cart: CartItemInterface[];
  updateCart: (updatedCart: CartItemInterface) => void;
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
      return;
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
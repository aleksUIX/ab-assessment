import React, { createContext, useState } from "react";

interface CartItemInterface {
  id: string;
  quantity: number;
}

function createInitialCart() {
  return {
      id: "",
      quantity: 0,
    }
}

interface CartContextInterface {
  cart: CartItemInterface,
  updateCart: (updatedCart: CartItemInterface) => void;
}

export const CartContext = createContext({} as CartContextInterface);

export const CartContextProvider = ({ children }: React.PropsWithChildren) => {
  const [cart, setItems] = useState<CartItemInterface>(createInitialCart());

  const updateCart = (updatedCart: CartItemInterface) => {
    // update filter state
    if (updatedCart) {
      setItems(updatedCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        updateCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

import React, { createContext, useState } from "react";

interface CartInterface {
  timeRange: number[];
  tags: string[];
  sources: string[];
  searchingPhrase: string;
}

interface CartContextInterface {}

export const CartContext = createContext({} as CartContextInterface);

export const CartContextProvider = ({ children }: React.PropsWithChildren) => {
  const [items, setItems] = useState<string[]>([]);

  const updateCart = (updatedCart: CartInterface) => {
    // update filter state
    if (updatedCart?.tags) {
      setItems(updatedCart.tags);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: {
          items,
        },
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

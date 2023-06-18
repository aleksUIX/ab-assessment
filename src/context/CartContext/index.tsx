import React, { createContext, useState, useContext } from "react";
import sanitizeHtml from "sanitize-html";

import { CatalogContext } from "../CatalogContext";

export const CartContext = createContext({} as CartContextInterface);

function createInitialCart() {
  return [] as CartItemInterface[];
}

// predefine payment information
function createInitialPaymentInfo() {
  return {
    firstName: "",
    lastName: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  } as PaymentInfoInterface;
}

export const CartContextProvider = ({ children }: React.PropsWithChildren) => {
  const { catalogItem } = useContext(CatalogContext);
  const [cart, setCart] = useState(createInitialCart());
  const [paymentFinished, setPaymentFinished] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState(createInitialPaymentInfo());

  // changes to cart contents
  const updateCart = (cartItem: CartItemInterface) => {
    // check if item is already in cart
    const itemInCart = cart.find(
      (item: { type: string }) => item.type === cartItem.type
    );

    // if item is not in cart, add it
    if (!itemInCart) {
      setCart([...cart, cartItem]);
    } else {
      // update cart with new quantity
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

  const updatePaymentInfo = (paymentInfo: PaymentInfoInterface) => {
    setPaymentInfo(paymentInfo);
  };

  const checkOut = () => { 
    // remove spaces from card number
    paymentInfo.cardNumber = paymentInfo.cardNumber.replace(/\s/g, "");

    // change state to checkout complete
    setPaymentFinished(true);

    // stringify cart and payment info and sanitize html
    const cleanOutput = sanitizeHtml(JSON.stringify({ cart, paymentInfo, catalogItem }))

    // TODO: add validation logic to check if payment info is valid after sanitization

    localStorage.setItem(
      "cart",
      cleanOutput
    );

    // TODO: add transaction persistence here
    console.log('persisted cart data', cleanOutput)
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        updateCart,
        paymentInfo,
        updatePaymentInfo,
        checkOut,
        paymentFinished,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

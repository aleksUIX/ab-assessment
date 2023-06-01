import React, { createContext, useState } from "react";

export const CartContext = createContext({} as CartContextInterface);

function createInitialCart() {
  return [] as CartItemInterface[];
}

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
  const [cart, setCart] = useState(createInitialCart());
  const [paymentFinished, setPaymentFinished] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState(createInitialPaymentInfo());

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
    console.log(
      "Thank you for your purchase! Your order is:",
      JSON.stringify(cart, null, 2),
      "Payment Details",
      JSON.stringify(paymentInfo, null, 2)
    );
    setPaymentFinished(true);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        updateCart,
        paymentInfo,
        updatePaymentInfo,
        checkOut,
        paymentFinished
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

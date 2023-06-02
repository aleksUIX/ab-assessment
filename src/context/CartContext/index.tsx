import React, { createContext, useState, useContext } from "react";
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
    // this is where you would send the cart and payment info to a server
    console.log(
      "Thank you for your purchase! Your order is:",
      JSON.stringify(cart, null, 2),
      "Payment Details",
      JSON.stringify(paymentInfo, null, 2)
    );

    // change state to checkout complete
    setPaymentFinished(true);

    localStorage.setItem("cart", JSON.stringify({ cart, paymentInfo, catalogItem }));
    //TODO: add transaction persistence here
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

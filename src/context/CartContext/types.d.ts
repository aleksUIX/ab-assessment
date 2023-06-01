interface CartItemInterface {
  type: string;
  cost: number;
  quantity: number;
}

interface CartContextInterface {
  cart: CartItemInterface[];
  updateCart: (updatedCart: CartItemInterface) => void;
  paymentInfo: PaymentInfoInterface;
  updatePaymentInfo: (updatedPaymentInfo: PaymentInfoInterface) => void;
  checkOut: () => void;
}

interface PaymentInfoInterface {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  firstName: string;
  lastName: string;
  address: string;
}
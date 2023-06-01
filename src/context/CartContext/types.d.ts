interface CartItemInterface {
  type: string;
  cost: number;
  quantity: number;
}

interface CartContextInterface {
  cart: CartItemInterface[];
  updateCart: (updatedCart: CartItemInterface) => void;
}
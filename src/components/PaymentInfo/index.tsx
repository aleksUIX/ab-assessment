import { useContext } from "react";
import { Button } from "@chakra-ui/react";

import PaymentInput from "./PaymentInput";
import expiryDateFormat from "../../utils/expiryDateFormat";
import { CartContext } from "../../context/CartContext";

function PaymentInfo() {
  const cartCtx = useContext(CartContext);
  const { cart, checkOut, paymentInfo, updatePaymentInfo } = cartCtx;
  const { expiryDate } = paymentInfo;

  // simple validation for enabling checkout button
  // this could be moved to context and exposed as a function
  const hasItems = cart.length > 0 && cart.every((item) => item.quantity > 0);
  const hasPaymentInfo = Object.values(paymentInfo).every((val) => val !== "");

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <PaymentInput
          placeholder="First Name"
          isRequired
          onChange={(e) =>
            updatePaymentInfo({ ...paymentInfo, firstName: e.target.value })
          }
        />
        <PaymentInput
          placeholder="Last Name"
          isRequired
          onChange={(e) =>
            updatePaymentInfo({ ...paymentInfo, lastName: e.target.value })
          }
        />
      </div>
      <PaymentInput
        placeholder="Address"
        isRequired
        onChange={(e) =>
          // TODO: add formatting and validation
          updatePaymentInfo({ ...paymentInfo, address: e.target.value })
        }
      />
      <p className="mt-4 text-xl font-bold">Payment Details</p>
      <PaymentInput
        placeholder="0000 0000 0000 0000"
        isRequired
        type="number"
        onChange={(e) =>
          // TODO: add formatting and validation
          updatePaymentInfo({ ...paymentInfo, cardNumber: e.target.value })
        }
      />
      <div className="grid grid-cols-2 gap-2">
        <PaymentInput
          placeholder="MM / YY"
          isRequired
          onChange={(e) => {
            // example of formatting input
            updatePaymentInfo({
              ...paymentInfo,
              expiryDate: e.target.value.replace(/\//g, ""),
            });
          }}
          value={expiryDateFormat(expiryDate)}
        />
        <PaymentInput
          placeholder="CVV"
          maxLength={3}
          isRequired
          onChange={(e) =>
            // TODO: add formatting and validation
            updatePaymentInfo({ ...paymentInfo, cvv: e.target.value })
          }
        />
      </div>
      <Button
        colorScheme="blue"
        size="lg"
        borderRadius={0}
        className="mt-8"
        onClick={() => checkOut()}
        isDisabled={!hasItems || !hasPaymentInfo}
      >
        Get Tickets
      </Button>
    </>
  );
}

export default PaymentInfo;

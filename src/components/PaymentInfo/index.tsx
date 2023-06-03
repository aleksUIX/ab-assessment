import { useContext } from "react";
import { BsCreditCard2Back } from "react-icons/bs";
import { Button, InputGroup, InputRightElement } from "@chakra-ui/react";

import PaymentInput from "./PaymentInput";
import expiryDateFormatter from "../../utils/expiryDateFormatter";
import cardNumberFormatter from "../../utils/cardNumberFormatter";
import { CartContext } from "../../context/CartContext";

function PaymentInfo() {
  const cartCtx = useContext(CartContext);
  const { cart, checkOut, paymentInfo, updatePaymentInfo } = cartCtx;
  const { expiryDate, cardNumber } = paymentInfo;

  // simple validation for enabling checkout button
  // this could be moved to context and exposed as a function
  const hasItems = cart.length > 0 && cart.every((item) => item.quantity > 0);
  const hasPaymentInfo = Object.values(paymentInfo).every((val) => val !== "");
  const cardNumberInvalid =
    paymentInfo.cardNumber.length > 0 && paymentInfo.cardNumber.length !== 19;

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <PaymentInput
          placeholder="First Name"
          isRequired
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updatePaymentInfo({ ...paymentInfo, firstName: e.target.value })
          }
        />
        <PaymentInput
          placeholder="Last Name"
          isRequired
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updatePaymentInfo({ ...paymentInfo, lastName: e.target.value })
          }
        />
      </div>
      <PaymentInput
        placeholder="Address"
        isRequired
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          // TODO: add formatting and validation
          updatePaymentInfo({ ...paymentInfo, address: e.target.value })
        }
      />
      <p className="mt-4 text-xl font-bold">Payment Details</p>
      <InputGroup>
        <PaymentInput
          placeholder="0000 0000 0000 0000"
          isRequired
          // type="number"
          // TODO: extend validation
          isInvalid={cardNumberInvalid}
          value={cardNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            updatePaymentInfo({
              ...paymentInfo,
              cardNumber: cardNumberFormatter(e.target.value),
            });
          }}
        />
        <InputRightElement className="flex align-center justify-center" h={12}>
          <BsCreditCard2Back style={{ fill: "gray" }} />
        </InputRightElement>
      </InputGroup>
      {/* Example of validation feedback for user */}
      {cardNumberInvalid && <>Card number must be 16 digits</>}
      <div className="grid grid-cols-2 gap-4">
        <PaymentInput
          placeholder="MM / YY"
          isRequired
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            // example of formatting input
            updatePaymentInfo({
              ...paymentInfo,
              expiryDate: e.target.value.replace(/\//g, ""),
            });
          }}
          value={expiryDateFormatter(expiryDate)}
        />
        <PaymentInput
          placeholder="CVV"
          maxLength={3}
          isRequired
          // TODO: extend validation
          isInvalid={
            paymentInfo.cvv.length > 0 &&
            (isNaN(parseInt(paymentInfo.cvv)) || paymentInfo.cvv.length !== 3)
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            // TODO: add formatting
            updatePaymentInfo({ ...paymentInfo, cvv: e.target.value })
          }
        />
      </div>
      <Button
        colorScheme={"facebook"}
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

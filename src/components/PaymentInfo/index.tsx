import { useState } from "react";
import { Button } from "@chakra-ui/react";

import PaymentInput from "./PaymentInput";
import expiryDateFormat from "../../utils/expiryDateFormat";

function PaymentInfo() {
  const [ccExpiry, setCCExpiry] = useState("");

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <PaymentInput placeholder="First Name" />
        <PaymentInput placeholder="Last Name" />
      </div>
      <PaymentInput placeholder="Address" />
      <p className="mt-4 text-xl font-bold">Payment Details</p>
      <PaymentInput placeholder="0000 0000 0000 0000" type="number" />
      <div className="grid grid-cols-2 gap-2">
        <PaymentInput
          placeholder="MM / YY"
          onChange={(e: { target: { value: string } }) => {
            setCCExpiry(e.target.value.replace(/\//g, ""));
          }}
          value={expiryDateFormat(ccExpiry)}
        />
        <PaymentInput placeholder="CVV" />
      </div>
      <Button colorScheme="blue" size="lg" borderRadius={0} className="mt-8">
        Get Tickets
      </Button>
    </>
  );
}

export default PaymentInfo;

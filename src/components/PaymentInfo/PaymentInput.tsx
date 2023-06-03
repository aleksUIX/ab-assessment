import { Input } from "@chakra-ui/react";
import React from "react";


// This component is to provide abstraction for the input field
export default function PaymentInput(props: React.ComponentProps<typeof Input>) {
  return (
    <Input
      bg="white"
      size="lg"
      borderRadius={4}
      colorScheme={"facebook"}
      {...props}
    />
  );
}

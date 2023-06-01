import { Input } from "@chakra-ui/react";
import React from "react";



export default function PaymentInput(props: React.ComponentProps<typeof Input>) {
  return (
    <Input
      bg="white"
      size="lg"
      borderRadius={0}
      borderColor="grey"
      {...props}
    />
  );
}

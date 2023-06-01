import { Input } from "@chakra-ui/react";

export default function PaymentInput(props: any) {
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

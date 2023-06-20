import { Input, Button, HStack } from "@chakra-ui/react";

function QuantityInput({ ...inputProps }) {
  const { min, max, changeHandler } = inputProps;

  return (
    <HStack maxW="320px" maxH="40px">
      <Button
        colorScheme="facebook"
        size="sm"
        onClick={() => {
            changeHandler(Math.max(Math.min(inputProps.value - 1, max), min));
        }}
      >
        -
      </Button>
      <Input
        w={16}
        {...inputProps}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          const asNum = parseInt(e.currentTarget.value);
          if (!isNaN(asNum) && asNum > -1) {
            changeHandler(Math.max(Math.min(asNum + 1, max), min));
          }
        }}
        color="black"
        background="white"
        textAlign="center"
      />
      <Button
        colorScheme="facebook"
        size="sm"
        onClick={() => {
            changeHandler(Math.max(Math.min(inputProps.value + 1, max), min));
        }}
      >
        +
      </Button>
    </HStack>
  );
}

export default QuantityInput;

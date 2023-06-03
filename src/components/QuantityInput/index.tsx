import { Input, Button, HStack, useNumberInput } from "@chakra-ui/react";

function QuantityInput({ ...inputProps }) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 0,
      max: 999,
      onChange: inputProps.onChange,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW="320px" maxH="40px">
      <Button {...dec} colorScheme="facebook" size="sm">-</Button>
      <Input w={16} {...input} color="black" background="white" />
      <Button {...inc} colorScheme="facebook" size="sm">+</Button>
    </HStack>
  );
}

export default QuantityInput;

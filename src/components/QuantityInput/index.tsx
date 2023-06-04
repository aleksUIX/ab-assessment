import { Input, Button, HStack, useNumberInput } from "@chakra-ui/react";

function QuantityInput({ ...inputProps }) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 0,
      // limited to 999 for now, this would normally be passed from an inventory API
      max: 999,
      onChange: inputProps.onChange,
    });

  // let's me use the Chakra UI props to style our components
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW="320px" maxH="40px">
      <Button {...dec} colorScheme="facebook" size="sm">-</Button>
      <Input w={16} {...input} color="black" background="white" textAlign="center" />
      <Button {...inc} colorScheme="facebook" size="sm">+</Button>
    </HStack>
  );
}

export default QuantityInput;

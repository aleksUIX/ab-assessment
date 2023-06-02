import currencyFormatter from "../../utils/currencyFormatter";

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";



function TicketType({ ticket, onChange }: TicketFormProps) {
  const { name, description, cost } = ticket;

  return (
    <div className="grid grid-cols-4 py-6">
      <div className="col-span-3">
        <p className="text-2xl mb-4">{name}</p>
        <p className="mb-4">{description}</p>
        <p className="text-2xl">{currencyFormatter(cost, 2)}</p>
      </div>
      <div className="flex justify-end">
        <div className="w-20">
          <NumberInput
            className="bg-white border-gray-400"
            max={999}
            min={0}
            defaultValue={0}
            onChange={(value) =>  {
              const asNum = parseInt(value)
              if (!isNaN(asNum) && asNum > -1) {
                onChange(asNum)
              }
            }}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </div>
      </div>
    </div>
  );
}

export default TicketType;

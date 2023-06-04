import currencyFormatter from "../../utils/currencyFormatter";
import QuantityInput from "../QuantityInput";



function TicketType({ ticket, onChange }: TicketFormProps) {
  const { name, description, cost } = ticket;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 py-6">
      <div className="col-span-3">
        <p className="text-2xl mb-6">{name}</p>
        <p className="mb-6">{description}</p>
        <p className="text-2xl">{currencyFormatter(cost, 2)}</p>
      </div>
      <div className="flex justify-end align-start">
          <QuantityInput
            className="bg-white border-gray-400"
            onChange={(value: string) => {
              const asNum = parseInt(value);
              if (!isNaN(asNum) && asNum > -1) {
                onChange(asNum);
              }
            }}
          />
      </div>
    </div>
  );
}

export default TicketType;
import currencyFormatter from "../../utils/currencyFormatter";
import QuantityInput from "../QuantityInput";

function TicketType({ ticket, value, onChange }: TicketFormProps) {
  const max: number = 999,
    min: number = 0;
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
          min={min}
          max={max}
          className="bg-white border-gray-400"
          value={value || 0}
          changeHandler={onChange}
        />
      </div>
    </div>
  );
}

export default TicketType;

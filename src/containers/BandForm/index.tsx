import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

import BandInfo from "../../components/BandInfo";
import TicketType from "../../components/TicketType";
import PaymentInfo from "../../components/PaymentInfo";
import PaymentSuccessful from "../../components/PaymentSuccessful";

import currencyFormatter from "../../utils/currencyFormatter";

function BandForm({ band }: BandFormProps) {
  const cartCtx = useContext(CartContext);
  const { cart, updateCart, paymentFinished } = cartCtx;

  // sum up cart total
  const cartTotal = cart.reduce((acc: number, curr: any) => {
    return acc + curr.quantity * curr.cost;
  }, 0);

  return (
    <div className="grid grid-cols-5 gap-12">
      <BandInfo band={band} />
      <div className="col-span-3 bg-indigo-50 p-12 pt-8">
        {!paymentFinished ? (
          <>
            <h2 className="text-2xl font-bold mb-2">Select Tickets</h2>
            <div className="grid grid-row">
              {band?.ticketTypes?.map((ticket: any) => (
                <>
                  <TicketType
                    ticket={ticket}
                    onChange={(quantity) =>
                      updateCart({
                        type: ticket.type,
                        quantity: parseInt(quantity),
                        cost: ticket.cost,
                      })
                    }
                  />
                  <div className="bg-gray-400 h-px" />
                </>
              ))}
            </div>
            <div className="grid grid-row gap-2">
              <p className="mb-6 mt-6 text-2xl flex justify-between uppercase">
                Total <span>{currencyFormatter(cartTotal, 2)}</span>
              </p>
              <PaymentInfo />
            </div>
          </>
        ) : (
          <PaymentSuccessful />
        )}
      </div>
    </div>
  );
}

export default BandForm;

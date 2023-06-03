import { LuPartyPopper } from "react-icons/lu";

function PaymentSuccessful() {
  return (
    <div className="flex flex-col w-full h-full align-center justify-center">
      <p className="text-2xl text-center mt-12">
        Thank you for making the purchase!
      </p>
      <p className="text-xl text-center">
        You will receive an email with your tickets shortly.
      </p>
      <div className="flex justify-center mt-12">
        <LuPartyPopper className="text-9xl text-indigo-200" />
      </div>
    </div>
  );
}

export default PaymentSuccessful;

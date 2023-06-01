import { useState } from "react";
import htmlParse from "html-react-parser";
import sanitizeHtml from "sanitize-html";
import { Button, Input } from "@chakra-ui/react";

import expiryDateFormat from "../utils/expiryDateFormat";
import dateFormatter from "../utils/dateFormatter";
import TicketType from "./TicketType";

interface BandFormProps {
  band: any;
}

function BandForm({ band }: BandFormProps) {
  const { name, location, description_blurb, date, imgUrl } = band;
  const [ccNumber, setCCNumber] = useState("");
  const [ccExpiry, setCCExpiry] = useState("");

  return (
    <>
      <div className="grid grid-cols-5 gap-12">
        <div className="col-span-5">
          <h1 className="text-4xl mb-4 font-bold">{name}</h1>
          <h2>{dateFormatter(date)}</h2>
          <h2>{location}</h2>
        </div>
        <div className="col-span-2 gap-12">
          <img src={imgUrl} alt={name} className="mb-12" />
          <div>{htmlParse(sanitizeHtml(description_blurb))}</div>
        </div>
        <div className="col-span-3 bg-gray-100 p-12 pt-8">
          <h2 className="text-2xl font-bold mb-2">Select Tickets</h2>
          <div className="grid grid-row">
            {band?.ticketTypes?.map((ticket: any) => (
              <>
                <TicketType ticket={ticket} />
                <div className="bg-sky-700 h-px" />
              </>
            ))}
          </div>
          <div className="grid grid-row gap-2">
            <p className="mb-6 mt-6 text-2xl flex justify-between uppercase">
              Total <span>$0</span>
            </p>
            <div className="grid grid-cols-2 gap-2">
              <PaymentInput placeholder="First Name" />
              <PaymentInput placeholder="Last Name" />
            </div>
            <PaymentInput placeholder="Address" />
            <p className="mt-4 text-xl font-bold">Payment Details</p>
            <PaymentInput placeholder="0000 0000 0000 0000" type="number" />
            <div className="grid grid-cols-2 gap-2">
              <PaymentInput
                placeholder="MM / YY"
                onChange={(e: { target: { value: string } }) => {
                  setCCExpiry(e.target.value.replace(/\//g, ""));
                }}
                value={expiryDateFormat(ccExpiry)}
              />
              <PaymentInput placeholder="CVV" />
            </div>
            <Button
              colorScheme="blue"
              size="lg"
              borderRadius={0}
              className="mt-8"
            >
              Get Tickets
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BandForm;

function PaymentInput(props: any) {
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

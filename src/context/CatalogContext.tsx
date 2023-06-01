import React, { createContext, useState } from "react";

import punkBand from "../band-json/punk-band.json";
import kpopBand from "../band-json/kpop-band.json";
import skaBand from "../band-json/ska-band.json";

function createInitialCatalog() {
  return [punkBand, kpopBand, skaBand];
}

interface TicketInterface {
  type: string;
  name: string;
  description: string;
  cost: number;
}

interface CatalogInterface {
  name: string,
  id: string,
  date: number,
  location: string,
  description_blurb: string,
  imgUrl: string,
  ticketTypes: TicketInterface[]
}

interface CartContextInterface {}

export const CartContext = createContext({} as CartContextInterface);

export const CartContextProvider = ({ children }: React.PropsWithChildren) => {
  // we'll keep the catalog in state for now
  // there is no need to update it in this use case though
  const [catalog, setCatalog] = useState<CatalogInterface[]>(createInitialCatalog());

  return (
    <CartContext.Provider
      value={{
        catalog,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

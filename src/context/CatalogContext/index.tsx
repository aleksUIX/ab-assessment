import React, { createContext, useState } from "react";

import punkBand from "../../band-json/punk-band.json";
import kpopBand from "../../band-json/kpop-band.json";
import skaBand from "../../band-json/ska-band.json";
import { useParams } from "react-router-dom";

// the catalog is built from the json files
// in a real project we would probably use a database
// one way to do it is to use a fetch method or a library like React Query to fetch the data
// TODO: add a database and fetch the data
function createInitialCatalog() {
  return [punkBand, kpopBand, skaBand];
}

function createInitialCatalogItem(catalog: CatalogInterface[]): CatalogInterface {
  const { bandId = 'btess' } = useParams<{ bandId: string }>();

  // pick band from catalog
  const band = catalog.find((band: any) => band.id === bandId);
  return band as CatalogInterface
}

export const CatalogContext = createContext({} as CatalogContextInterface);

export const CatalogContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  // we'll keep the catalog in state for now
  // there is no need to update it in this use case though
  const [catalog] = useState<CatalogInterface[]>(
    createInitialCatalog()
  );

  // if we added navigation in page, we can use setCatalogItem to update the catalog item
  const [catalogItem] = useState(createInitialCatalogItem(catalog));

  return (
    <CatalogContext.Provider
      value={{
        catalog,
        catalogItem
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};

import { useContext } from "react";

import { CatalogContext } from "./context/CatalogContext";

import BandForm from "./containers/BandForm";

import "./App.css";

function App() {
  const catalogCtx = useContext(CatalogContext);
  const { catalog } = catalogCtx;

  // the spec does not call for navigation, so I hardcoded the first band
  // TODO: add navidation to allow user to select a band
  return (
    <>
      <BandForm band={catalog[0]} />
    </>
  );
}

export default App;

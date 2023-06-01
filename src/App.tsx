import { useContext } from "react";

import { CatalogContext } from "./context/CatalogContext";

import BandForm from "./containers/BandForm";

import "./App.css";

function App() {
  const catalogCtx = useContext(CatalogContext);
  const { catalog } = catalogCtx;

  return (
    <>
      <BandForm band={catalog[0]} />
    </>
  );
}

export default App;

import { useContext } from "react";

import { CatalogContext } from "./context/CatalogContext";

import BandForm from "./components/BandForm";

import "./App.css";

function App() {
  const catalogCtx = useContext(CatalogContext);
  const { catalog } = catalogCtx;

  return (
    <>
      {/* <h1>Ticket Reservation System</h1> */}
      <BandForm band={catalog[0]} />
    </>
  );
}

export default App;

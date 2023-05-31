import { useState } from "react";

import punkBand from "./band-json/punk-band.json";
import kpopBand from "./band-json/kpop-band.json";
import skaBand from "./band-json/ska-band.json";

import BandForm from "./components/BandForm";

import "./App.css";

function App() {
  const [bands, setBands] = useState([punkBand, kpopBand, skaBand]);

  return (
    <>
      {/* <h1>Ticket Reservation System</h1> */}
      <BandForm band={bands[2]} />
    </>
  );
}

export default App;

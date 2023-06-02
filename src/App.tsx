import { Route, Routes } from "react-router-dom";

import { CartContextProvider } from "./context/CartContext/index.tsx";
import { CatalogContextProvider } from "./context/CatalogContext/index.tsx";
import { baseRoutes } from "./routes";

import "./App.css";

function App() {
  return (
    <Routes>
      {[...baseRoutes].map(({ key, path, component }) => (
        <Route
          key={key}
          path={path}
          element={<AppRoute component={component} />}
        />
      ))}
    </Routes>
  );
}

function AppRoute({ component }: any) {
  return (
    <CatalogContextProvider>
      <CartContextProvider>{component}</CartContextProvider>
    </CatalogContextProvider>
  );
}

export default App;

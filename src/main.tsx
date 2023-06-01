import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import { CartContextProvider } from "./context/CartContext.tsx";
import { CatalogContextProvider } from "./context/CatalogContext.tsx";

import theme from "./theme/index.ts";
import App from "./App.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CatalogContextProvider>
      <CartContextProvider>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </CartContextProvider>
    </CatalogContextProvider>
  </React.StrictMode>
);

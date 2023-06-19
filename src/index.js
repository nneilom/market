import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CollectionContextProvider from "./context/CollectionContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import AuthContextProvider from "./context/AuthContextProvider";
import FavorContextProvider from "./context/FavorContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <FavorContextProvider>
        <CartContextProvider>
          <CollectionContextProvider>
            <App />
          </CollectionContextProvider>
        </CartContextProvider>
      </FavorContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);

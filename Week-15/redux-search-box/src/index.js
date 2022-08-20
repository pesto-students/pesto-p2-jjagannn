import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { SearchBoxReducer } from "../src/searchReducer";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

let store = configureStore({ reducer: SearchBoxReducer });

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);

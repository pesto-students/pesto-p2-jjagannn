import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Loader from "react-loader-spinner";

import App from "./App";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        visible={spinnerLoading}
      /> */}
    <App />
  </StrictMode>
);

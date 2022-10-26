import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./lights";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App /> 
    </StrictMode>
  </Provider>,
  document.getElementById("root")
);

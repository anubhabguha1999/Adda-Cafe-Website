import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initalState";
import reducer from "./context/reducer";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,

  document.getElementById("root")
);

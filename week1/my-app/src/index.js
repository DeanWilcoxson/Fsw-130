import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeContext from "./ThemeContext";

ReactDOM.render(
  <ThemeContext.Provider value={"light"}>
    <App />
  </ThemeContext.Provider>,
  document.getElementById("root")
);
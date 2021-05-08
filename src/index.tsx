import { StrictMode } from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "globalStyles";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
  document.getElementById("root"),
);

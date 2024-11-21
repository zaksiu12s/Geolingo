import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

document.querySelector("#pre-react-loader")?.remove();
document.querySelector("#pre-react-styles")?.remove();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

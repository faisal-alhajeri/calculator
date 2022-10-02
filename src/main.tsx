import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CalculatorProvider from "./context/CalculatorContext";
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CalculatorProvider>
      <App />
    </CalculatorProvider>
  </React.StrictMode>
);

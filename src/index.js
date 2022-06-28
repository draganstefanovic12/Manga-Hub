import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "typeface-roboto";
import BrowserRoutes from "./components/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRoutes />
  </React.StrictMode>
);

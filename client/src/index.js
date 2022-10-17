import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./weather-icons/css/weather-icons.css";
import ContextPomo from "./components/context/PomoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <ContextPomo>
      <App />
    </ContextPomo>
  </div>
);

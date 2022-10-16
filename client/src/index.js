import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./weather-icons/css/weather-icons.css";
import { AuthContext, data } from "./store/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <AuthContext.Provider value={data}>
      <App />
    </AuthContext.Provider>
  </div>
);

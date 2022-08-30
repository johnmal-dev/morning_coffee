import React from "react";
import ClockComponent from "./components/ClockComponent";
import Greeting from "./components/Greeting";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ClockComponent />
      <Greeting />
    </div>
  );
}

export default App;

import React from "react";
import ClockComponent from "./components/ClockComponent";
import Greeting from "./components/Greeting";
import "./App.css";
import FocusComponent from "./components/FocusComponent";

function App() {
  return (
    <div className="App">
      <ClockComponent />
      <Greeting />
      <FocusComponent />
    </div>
  );
}

export default App;

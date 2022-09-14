import React from "react";
import ClockComponent from "./components/ClockComponent";
import Greeting from "./components/Greeting";
import "./App.css";
import FocusComponent from "./components/FocusComponent";
import TodoComponent from './components/Todos';

function App() {
  return (
    <div className="App">
      <ClockComponent />
      <Greeting />
      <FocusComponent />
      <TodoComponent />
    </div>
  );
}

export default App;

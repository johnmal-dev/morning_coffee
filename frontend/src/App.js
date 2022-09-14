import React from "react";
import ClockComponent from "./components/ClockComponent";
import Greeting from "./components/Greeting";
import "./App.css";
import FocusComponent from "./components/FocusComponent";
import TodoComponent from './components/Todos';
import DraggableTodos from './components/DraggableTodos';

function App() {
  return (
    <div className="App">
      <ClockComponent />
      <Greeting />
      {/* <FocusComponent /> */}
      {/* <TodoComponent /> */}
      <DraggableTodos />
    </div>
  );
}

export default App;

import React from "react";
import ClockComponent from "./components/ClockComponent";
import Greeting from "./components/Greeting";
import "./App.css";
import Wallpaper from "./components/Wallpaper";
import WeatherComponent from "./components/WeatherComponent";

function App() {
  return (
    <div className="App font-roboto h-screen w-screen text-white flex flex-col justify-center items-center">
      <Wallpaper />
      <ClockComponent />
      <Greeting />
      <WeatherComponent />
    </div>
  );
}

export default App;

import React from 'react';
import Clock from './components/Clock';
import Greeting from './components/Greeting';
import Auth from './components/Auth';
import './App.css';
import Wallpaper from './components/Wallpaper';
import Weather from './components/Weather';
import Todos from "./components/Todos";

function App() {
  return (
    <div className='App font-roboto h-screen w-screen overflow-y-hidden text-white flex flex-col justify-center items-center'>
      <Wallpaper />
      <Clock />
      <Greeting />
      <Weather />
      <Auth />
      <Todos />
    </div>
  );
}

export default App;

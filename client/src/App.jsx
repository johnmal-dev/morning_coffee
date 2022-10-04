import React, { useState, useEffect } from 'react';
import Clock from './components/Clock';
import Auth from './components/Auth';
import './App.css';
import Wallpaper from './components/Wallpaper';
import Weather from './components/Weather';
import Todos from './components/Todos';
import Pomo from './components/Pomo';
import EllipsisButton from './components/EllipsisButton';
import SwitchButton from './components/SwitchButton';
import CheckboxButton from './components/CheckboxButton';
import SettingsIcon from './components/SettingsIcon';
import HeartButton from './components/HeartButton';
import NextIcon from './components/NextIcon';
import WallpaperDetails from './components/WallpaperDetails';
import wallpapersService from './services/wallpapers';

const todoItems = [
  {
    description: 'go for a run',
    isComplete: true,
  },
];

function App() {
  const [wallpaperDetails, setWallpaperDetails] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(todoItems);
  }, []);

  const getWallpaper = () => {
    const localWallpaperDetails = JSON.parse(
      localStorage.getItem('wallpaper-details')
    );
    if (!localWallpaperDetails) {
      wallpapersService
        .getWallpaper()
        .then((res) => {
          setWallpaperDetails(res);
          localStorage.setItem('wallpaper-details', JSON.stringify(res));
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setWallpaperDetails(
        JSON.parse(localStorage.getItem('wallpaper-details'))
      );
    }
  };

  return (
    <div className='App h-screen w-screen overflow-y-hidden text-white flex flex-col justify-between items-stretch select-none'>
      <Wallpaper
        wallpaperDetails={wallpaperDetails}
        setWallpaperDetails={setWallpaperDetails}
        getWallpaper={getWallpaper}
      />
      {/* <Clock /> */}
      {/* <Pomo
        todos={todos}
        setTodos={setTodos}
      />
      <Weather />
      <Auth />
      <Todos
        todos={todos}
        setTodos={setTodos}
      /> */}
      <div className='flex flex-row justify-between h-[60px] items-center flex-[0_0_auto]'>
        <div className='flex flex-row justify-start'>
          <div>Links</div>
          <div>Soundscapes</div>
        </div>
        <div className='flex flex-row-reverse justify-end'>
          <div>Weather</div>
          <div>Countdown</div>
        </div>
      </div>
      <div className='center-above flex-[1_1_50%]'></div>
      <div className='center-container flex-auto select-none'>
        <div className='time-container flex justify-center items-center gap-4 group'>
          <div className='transform transition opacity-0 group-hover:opacity-80 cursor-pointer'>
            <SwitchButton />
          </div>
          <div className='text-3xl'>11:11</div>
          <div className='transform transition opacity-0 group-hover:opacity-80 cursor-pointer'>
            <EllipsisButton />
          </div>
        </div>
        <div className='greeting-container flex flex-row gap-2 group'>
          <div className='flex-1'></div>
          <div className='flex-auto w-0 flex justify-center whitespace-nowrap'>
            Good evening, John.
          </div>
          <div className='flex-1 transform transition opacity-0 group-hover:opacity-80 cursor-pointer'>
            <EllipsisButton />
          </div>
        </div>
      </div>
      <div className='flex-[1_1_50%] flex flex-col items-center justify-start select-none'>
        <div>TODAY</div>
        <div className='todo-container flex flex-row gap-2 group w-full'>
          <div className='flex-1 flex justify-end transform transition opacity-0 group-hover:opacity-80 cursor-pointer'>
            <CheckboxButton />
            {/* O */}
          </div>
          <div className='flex-none'>
            {todos.length ? todos[0].description : ''}
          </div>
          <div className='flex-1 transform transition opacity-0 group-hover:opacity-80 cursor-pointer'>
            <EllipsisButton />
            {/* ......... */}
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center h-[60px] p-2'>
        <WallpaperDetails
          wallpaperDetails={wallpaperDetails}
          getWallpaper={getWallpaper}
        />
        <div className='w-full absolute bottom-[60px] md:bottom-0 text-center'>
          <div className='app-container group'>
            <div className='group-hover:-translate-y-2 transform transition'>
              "You miss 100% of the shots you don't take"
            </div>
            <div className='absolute bottom-2 left-2/4 -translate-x-2/4 text-xs transform transition opacity-0 group-hover:opacity-80 group-hover:translate-y-2 group-hover:bottom-1'>
              Michael Scott
            </div>
          </div>
        </div>
        <div className='flex flex-row-reverse grow gap-1'>
          <div>Todo</div>
          <div>Notes</div>
        </div>
      </div>
    </div>
  );
}

export default App;

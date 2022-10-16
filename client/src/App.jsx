import React, { useState, useEffect } from 'react';
import './App.css';
import Wallpaper from './components/Wallpaper';
import EllipsisButton from './components/EllipsisButton';
import SwitchButton from './components/SwitchButton';
import CheckboxButton from './components/CheckboxButton';
import WallpaperDetails from './components/WallpaperDetails';
import wallpapersService from './services/wallpapers';
import Weather from './components/Weather';
import AudioButton from './components/AudioButton';
import Clock from './components/Clock';
import Greeting from './components/Greeting';
import Pomo from './components/Pomo';
import Auth from './components/Auth';
import Todos from './components/Todos';

function App() {
  const [wallpaperDetails, setWallpaperDetails] = useState([]);
  const [todos, setTodos] = useState([]);
  const [showClock, setShowClock] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {}, []);

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
      <div className='flex flex-row justify-between h-[60px] items-start flex-[0_0_auto] p-2'>
        <div className='flex flex-row justify-start gap-2'>
          <div className='cursor-pointer'>Links</div>
          <div className='cursor-pointer'>
            <AudioButton />
          </div>
        </div>
        <div className='flex flex-row-reverse justify-end gap-2'>
          <div className=''>
            <Weather />
          </div>
        </div>
      </div>
      <div className='center-above flex-[1_1_50%]'></div>
      <div className='center-container flex-auto select-none'>
        <div className='time-container flex justify-center items-center gap-4 group'>
          <div
            className='transform transition opacity-0 group-hover:opacity-80 cursor-pointer'
            onClick={() => setShowClock(!showClock)}
          >
            <SwitchButton />
          </div>
          <div className='text-3xl'>
            {/* <Clock /> */}
            {showClock && <Clock />}
            {!showClock && (
              <Pomo
                todos={todos}
                setTodos={setTodos}
              />
            )}
          </div>
          <div className='transform transition opacity-0 group-hover:opacity-80 cursor-pointer'>
            <EllipsisButton />
          </div>
        </div>
        <div className='greeting-container flex flex-row items-center group gap-1'>
          <div className='flex-1'></div>
          <div className='w-min flex justify-center whitespace-nowrap'>
            {showClock && (
              <Greeting
                isLoggedIn={isLoggedIn}
                loggedInName={userDetails ? userDetails.firstName : ''}
              />
            )}
          </div>
          <div className='flex-1 transform transition opacity-0 group-hover:opacity-80 cursor-pointer'>
            <EllipsisButton />
          </div>
        </div>
      </div>
      <div className='flex-[1_1_50%] flex flex-col items-center justify-start select-none'>
        {showClock ? (
          <>
            <div>TODAY</div>
            {todos.length > 0 && (
              <div className='todo-container flex flex-row gap-2 group w-full'>
                <div
                  className='flex-1 flex justify-end transform transition opacity-0 group-hover:opacity-80 cursor-pointer'
                  onClick={() => setTodos(todos.slice(1))}
                >
                  <CheckboxButton />
                </div>
                <div className='flex-none'>
                  {todos.length ? todos[0].description : ''}
                </div>
                <div className='flex-1 transform transition opacity-0 group-hover:opacity-80 cursor-pointer'>
                  <EllipsisButton />
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className='text-4xl font-bold drop-shadow-lg select-none text-center'>
              {todos[0] ? todos[0].description : 'Focus time.'}
            </div>
            <div className='border-2 px-5 py-1 rounded-full uppercase text-xs mt-2 w-min bg-gray-900 bg-opacity-40 hover:bg-opacity-30 cursor-pointer transition transform'>
              Start
            </div>
          </>
        )}
      </div>
      <div className='flex flex-row justify-between items-center h-[60px] p-2'>
        <div className='flex-1 flex flex-row items-center grow gap-2'>
          <Auth
            setIsLoggedIn={setIsLoggedIn}
            setUserDetails={setUserDetails}
          />
          <WallpaperDetails
            wallpaperDetails={wallpaperDetails}
            getWallpaper={getWallpaper}
          />
        </div>
        <div className='bottom-[60px] absolute left-2/4 -translate-x-2/4 md:left-0 md:-translate-x-0 md:relative md:bottom-0 w-full md:w-auto text-center'>
          <div className='app-container group'>
            <div className='group-hover:-translate-y-2 transform transition text-sm'>
              "You miss 100% of the shots you don't take"
            </div>
            <div className='absolute left-2/4 -translate-x-2/4 text-xs transform transition opacity-0 group-hover:opacity-80 group-hover:translate-y-2 bottom-1'>
              Michael Scott
            </div>
          </div>
        </div>
        <div className='flex-1 flex flex-row-reverse grow gap-2'>
          <div className='cursor-pointer'>
            <Todos
              todos={todos}
              setTodos={setTodos}
            />
          </div>
          <div className='cursor-pointer'>Notes</div>
        </div>
      </div>
    </div>
  );
}

export default App;

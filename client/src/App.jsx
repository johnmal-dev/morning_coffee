import React, { useState, useEffect, useContext } from 'react';
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
import CurrentFocus from './components/CurrentFocus';
import CounterWidget from './components/CounterWidget';
import { PomoContext } from './components/context/PomoContext'

function App() {
  const [wallpaperDetails, setWallpaperDetails] = useState([]);
  const [todos, setTodos] = useState([]);
  const [showClock, setShowClock] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState();
  const {
    running,
    setRunning,
    pomoCount,
    setPomoCount,
    focusMode,
    setFocusMode,
  } = useContext(PomoContext);

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
      <div className='upper-row flex flex-row justify-between h-[60px] items-start flex-[0_0_auto] p-2'>
        <div className='upper-row-left flex flex-row justify-start gap-2'>
          <div className='cursor-pointer'>Links</div>
          <div className='cursor-pointer'>
            <AudioButton />
          </div>
        </div>
        <div className='upper-row-right flex flex-row-reverse justify-end gap-2'>
          <div className=''>
            <Weather />
          </div>
          <div className=''>
            <CounterWidget
              title='Pomos'
              count={pomoCount}
            />
          </div>
        </div>
      </div>
      <div className='center-above flex-[1_1_50%] flex justify-center items-end'>
        {!showClock && (
          <div className='flex justify-center gap-10 border-t-2 pt-1 w-60'>
            <span
              className={`${
                focusMode ? 'opacity-100 font-semibold' : 'opacity-80'
              } cursor-pointer uppercase hover:opacity-100 transform transition active:opacity-80`}
              onClick={() => setFocusMode(true)}
            >
              Focus
            </span>
            <span
              className={`${
                !focusMode ? 'opacity-100 font-semibold' : 'opacity-80'
              } cursor-pointer uppercase hover:opacity-100 transform transition active:opacity-80`}
              onClick={() => setFocusMode(false)}
            >
              Break
            </span>
          </div>
        )}
      </div>
      <div className='center-container flex-auto select-none'>
        <div className='time-container flex justify-center items-center gap-4 group'>
          <div
            className='transform transition opacity-0 group-hover:opacity-80 cursor-pointer'
            onClick={() => setShowClock(!showClock)}
          >
            <SwitchButton />
          </div>
          <div className='text-3xl'>
            {showClock ? (
              <Clock />
            ) : (
              <Pomo
                running={running}
                setRunning={setRunning}
                pomoCount={pomoCount}
                setPomoCount={setPomoCount}
                focusMode={focusMode}
                setFocusMode={setFocusMode}
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
            <div className='text-center select-none mt-4'>
              {showClock ? (
                <Greeting
                  isLoggedIn={isLoggedIn}
                  loggedInName={userDetails ? userDetails.firstName : ''}
                />
              ) : (
                <CurrentFocus
                  focusMode={focusMode} focus={todos.length ? todos[0].description : null}
                />
              )}
            </div>
          </div>
          <div className='flex-1 transform transition opacity-0 group-hover:opacity-80 cursor-pointer'></div>
        </div>
      </div>
      <div className='flex-[1_1_50%] flex justify-center'>
        {showClock ? (
          <div className='text-center flex flex-col justify-center'>
            {todos.length > 0 && (
              <>
                <div>TODAY</div>
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
              </>
            )}
          </div>
        ) : (
          <div>
            <div
              className='border-2 px-5 py-1 rounded-full uppercase text-xs mt-4 w-20 text-center bg-gray-900 bg-opacity-40 hover:bg-opacity-30 cursor-pointer transition transform'
              onClick={() => setRunning(!running)}
            >
              {running ? 'PAUSE' : 'START'}
            </div>
          </div>
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

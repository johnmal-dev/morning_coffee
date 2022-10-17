import React, { createContext, useEffect, useState } from 'react';
import Sound from '../../sounds/ding.wav';

const ding = new Audio(Sound);
export const PomoContext = createContext();

function ContextPomo({ children }) {
  const [focusMinutes, setFocusMinutes] = useState(4 / 60);
  const [breakMinutes, setBreakMinutes] = useState(2 / 60);
  const [time, setTime] = useState(focusMinutes * 60 * 1000);
  const [focusMode, setFocusMode] = useState(true);
  const [running, setRunning] = useState(false);
  const [pomoCount, setPomoCount] = useState(0);

  const resetTimer = () => {
    setRunning(false);
    if (focusMode) {
      setTime(focusMinutes * 60 * 1000);
    } else {
      setTime(breakMinutes * 60 * 1000);
    }
  };

  // when focus mode changes, reset timer appropriately
  useEffect(() => {
    resetTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusMode]);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  if (running && time <= 0) {
    if (focusMode) {
      setPomoCount(pomoCount + 1);
    }
    ding.play();
    setRunning(false);
    setTime(focusMode ? breakMinutes * 60 * 1000 : focusMinutes * 60 * 1000);
    setFocusMode(!focusMode);
  }

  return (
    <PomoContext.Provider
      value={{
        focusMinutes,
        setFocusMinutes,
        breakMinutes,
        setBreakMinutes,
        time,
        setTime,
        focusMode,
        setFocusMode,
        running,
        setRunning,
        pomoCount,
        setPomoCount,
      }}
    >
      {children}
    </PomoContext.Provider>
  );
}

export default ContextPomo;

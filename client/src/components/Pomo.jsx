import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';

function Pomo({ todos, setTodos }) {
  const [focusMode, setFocusMode] = useState(true);
  const [isPaused, setIsPaused] = useState(true);
  const TWENTY_FIVE_MINUTES_IN_MS = 25 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterTwentyFiveMinutes = NOW_IN_MS + TWENTY_FIVE_MINUTES_IN_MS;

  return (
    <div className='clockComponent select-none flex flex-col items-center'>
      <div className='flex justify-center gap-10 border-t-2 pt-1 w-60'>
        <span
          className={`${
            focusMode ? 'opacity-100' : 'opacity-80'
          } cursor-pointer uppercase hover:opacity-100 transform transition active:opacity-80`}
          onClick={() => setFocusMode(true)}
        >
          Focus
        </span>
        <span
          className={`${
            !focusMode ? 'opacity-100' : 'opacity-80'
          } cursor-pointer uppercase hover:opacity-100 transform transition active:opacity-80`}
          onClick={() => setFocusMode(false)}
        >
          Break
        </span>
      </div>
      <CountdownTimer targetDate={dateTimeAfterTwentyFiveMinutes} />
    </div>
  );
}

export default Pomo;

import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';

function Pomo({ todos, setTodos }) {
  const [isPaused, setIsPaused] = useState(true);
  const TWENTY_FIVE_MINUTES_IN_MS = 25 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterTwentyFiveMinutes = NOW_IN_MS + TWENTY_FIVE_MINUTES_IN_MS;

  return (
    <>
      <CountdownTimer targetDate={dateTimeAfterTwentyFiveMinutes} />
    </>
  );
}

export default Pomo;

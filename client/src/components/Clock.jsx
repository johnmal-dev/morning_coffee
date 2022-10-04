import React from 'react';
import ReactClock from 'react-live-clock';
import Greeting from "./Greeting";

function ClockComponent() {
  return (
    <div className='select-none flex flex-col items-center'>
      <ReactClock
        className='text-8xl font-bold drop-shadow-2xl'
        format={'h:mm'}
        ticking={true}
      />
      <Greeting />
    </div>
  );
}

export default ClockComponent;

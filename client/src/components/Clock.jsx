import React from 'react';
import ReactClock from 'react-live-clock';

function Clock() {
  return (
    <>
      <ReactClock
        className='text-8xl font-bold drop-shadow-2xl'
        format={'h:mm'}
        ticking={true}
      />
    </>
  );
}

export default Clock;

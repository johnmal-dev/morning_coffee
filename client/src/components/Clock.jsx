import React from 'react';
import ReactClock from 'react-live-clock';

function ClockComponent() {
  return (
    <div className='clockComponent select-none'>
      <ReactClock
        className='text-8xl font-bold drop-shadow-2xl'
        format={'h:mm'}
        ticking={true}
      />
    </div>
  );
}

export default ClockComponent;

import React from 'react';

const CurrentFocus = ({ focus, focusMode }) => {
  return (
    <h1 className='text-4xl drop-shadow-lg'>
      {focus ? (
        <span>{focus}</span>
      ) : (
        <span>{focusMode ? 'Focus Time.' : 'Break Time.'}</span>
      )}
    </h1>
  );
};

export default CurrentFocus;

import React from 'react';

const CurrentFocus = ({ focus }) => {
  return (
    <>
      {focus && <h1 className='text-4xl font-bold drop-shadow-lg'>{focus}</h1>}
    </>
  );
};

export default CurrentFocus;

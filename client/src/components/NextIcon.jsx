import React from 'react';

const NextIcon = ({handleClick}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-4 h-4 cursor-pointer opacity-80 hover:opacity-100
            hover:-translate-y-0.5 transform transition'
      onClick={handleClick}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3'
      />
    </svg>
  );
};

export default NextIcon;

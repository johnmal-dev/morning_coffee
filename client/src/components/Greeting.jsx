import React, { useEffect, useState } from 'react';

const timeOfDay = () => {
  const hours = new Date().getHours();
  switch (true) {
    case hours >= 4 && hours < 12:
      return 'morning';
    case hours < 18:
      return 'afternoon';
    default:
      return 'evening';
  }
};

const Greeting = () => {
  const [formName, setFormName] = useState(null);
  const [name, setName] = useState(null);
  const localName = localStorage.getItem('name');

  useEffect(() => {
    if (localName) {
      setName(localName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    localStorage.setItem('name', formName);
    setName(formName);
  };

  if (!localName) {
    return (
      <div className='text-center select-none mt-4'>
        <h1 className='text-4xl font-bold drop-shadow-lg'>
          Hello, what's your name?
        </h1>
        <form
          action='#'
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            className='mt-2 bg-transparent font-semibold border-0 border-b-white border-b-2 caret-white text-4xl drop-shadow-lg focus:outline-0 text-center w-80'
            id='name-input'
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
        </form>
      </div>
    );
  }

  return (
    <div className='text-4xl font-bold drop-shadow-lg select-none'>
      <h1>{`Good ${timeOfDay()}, ${name}.`}</h1>
    </div>
  );
};

export default Greeting;

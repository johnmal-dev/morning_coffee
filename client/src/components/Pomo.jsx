import { useContext } from 'react';
import { PomoContext } from './context/PomoContext';

const Pomo = () => {
  const { time } = useContext(PomoContext);

  return (
    <div className='text-8xl font-bold drop-shadow-2xl'>
      <div>
        <span>{`${Math.floor((time / 60000) % 60)}`}:</span>
        <span>{`${Math.floor((time / 1000) % 60)}`.padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default Pomo;

const CounterWidget = ({ title, count }) => {
  return (
    <div className='cursor-pointer drop-shadow-2xl flex flex-col items-end'>
      <div className='text-lg'>{count}</div>
      <div className='text-xs'>
        <p className='drop-shadow-2xl'>{title}</p>
      </div>
    </div>
  );
};

export default CounterWidget;

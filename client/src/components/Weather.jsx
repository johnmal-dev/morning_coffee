import React, { useEffect, useState } from 'react';
import weatherService from '../services/weather';

const Weather = () => {
  const [coords, setCoords] = useState({ lat: 43.6773978, lon: -79.4816268 });
  const [weather, setWeather] = useState(null);

  const getLocation = () => {
    console.log('getLocation');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    getLocation();
    getWeather();
  }, []);

  const getWeather = () => {
    weatherService.getWeather(coords.lat, coords.lon).then((res) => {
      setWeather(res);
    });
  };

  return (
    weather && (
      <div className='cursor-pointer drop-shadow-2xl'>
        <div className='flex gap-1 items-center text-lg'>
          <i
            className={`wi wi-owm-${weather.isDay ? 'day' : 'night'}-${
              weather.iconId
            } text-xl`}
          ></i>
          <span>{weather.temp}&deg;</span>
        </div>
        <div className='text-xs text-right'>
          <p className='drop-shadow-2xl'>{weather.city}</p>
        </div>
      </div>
    )
  );
};

export default Weather;

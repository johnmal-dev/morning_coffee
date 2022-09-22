import React, { useEffect, useState } from 'react';
import weatherService from '../services/weather';
import './WeatherComponent.css';

const WeatherComponent = () => {
  const [coords, setCoords] = useState({ lat: 43.6773978, lon: -79.4816268 });
  const [weather, setWeather] = useState({});

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
    <div className='weather-component bg-opacity-50 bg-slate-500 m-1 p-1 rounded cursor-pointer'>
      <div className='flex gap-1 items-center text-lg'>
        <i className={`wi wi-owm-${weather.iconId} text-xl`}></i>
        <span>{weather.temp}&deg;</span>
      </div>
      <div className='text-xs text-right'>
        <p>{weather.city}</p>
      </div>
    </div>
  );
};

export default WeatherComponent;

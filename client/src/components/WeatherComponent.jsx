import React, { useEffect } from "react";
import "./WeatherComponent.css";

const WeatherComponent = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }, []);

  return (
    <div className="weather-component unselectable">
      <p>Toronto</p>
      <p>Scattered Clouds</p>
      <img
        src="http://openweathermap.org/img/wn/10d@2x.png"
        alt=""
      />
      <span>25&#8451;</span>
    </div>
  );
};

export default WeatherComponent;

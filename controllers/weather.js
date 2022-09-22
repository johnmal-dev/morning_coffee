const weatherRouter = require('express').Router();
const axios = require('axios');

weatherRouter.get('/', async (req, res) => {
  const { lat, lon } = req.query;
  const units = req.query.units || 'metric';
  const appid = process.env.WEATHER_KEY;

  try {
    const weatherRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=${units}`
    );
    const googleRes = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=43.6773978,-79.4816268&sensor=true&key=AIzaSyBGNH4n7WJjuTsqzyMcs-eRB1HV3EMLc7U`
    );

    const weatherData = weatherRes.data;
    const googleData = googleRes.data;

    const iconId = weatherData.weather[0].id;
    const temp = Math.round(weatherData.main.temp);
    const city = googleData.plus_code.compound_code.split(',')[0].split(' ')[1];

    const returnObj = {
      iconId: iconId,
      temp: temp,
      city: city,
    };

    res.send(returnObj);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

module.exports = weatherRouter;

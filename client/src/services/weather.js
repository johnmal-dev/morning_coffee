import axios from 'axios';
const baseUrl = '/api/weather';

const getWeather = async (lat, lon) => {
  const res = await axios.get(`${baseUrl}?lat=${lat}&lon=${lon}`);
  console.log(res);
  return res.data;
};

const exportObj = {
  getWeather,
};

export default exportObj;

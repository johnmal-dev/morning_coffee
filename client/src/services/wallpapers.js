import axios from 'axios';
const baseUrl = '/api/wallpapers';

const getWallpaper = async () => {
  const res = await axios.get(baseUrl);
  console.log(res);
  return res.data;
};

const exportObj = {
  getWallpaper,
};

export default exportObj;

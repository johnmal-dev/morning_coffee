import axios from "axios";
const baseUrl = "/api/wallpapers";

const getWallpaper = async () => {
  const res = await axios.get(baseUrl);
  return res.data.response;
};

const exportObj = {
  getWallpaper,
};

export default exportObj;

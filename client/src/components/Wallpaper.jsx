import React, { useEffect, useState } from "react";
import wallpapersService from "../services/wallpapers";
import "./Wallpaper.css";

const Wallpaper = () => {
  const [wallpaper, setWallpaper] = useState("");

  const styles = {
    backgroundImage: `url(${wallpaper})`,
  };

  useEffect(() => {
    const localWallpaper = localStorage.getItem("wallpaper");
    if (!localWallpaper) {
      wallpapersService
        .getWallpaper()
        .then((res) => {
          console.log(res);
          setWallpaper(res.urls.raw);
          localStorage.setItem("wallpaper", res.urls.raw);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setWallpaper(localWallpaper);
    }
  }, []);

  return <div style={styles} className="wallpaper-container"></div>;
};

export default Wallpaper;

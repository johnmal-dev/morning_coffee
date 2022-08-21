import React, { useEffect, useState } from "react";
import wallpapersService from "../services/wallpapers";
import "./Wallpaper.css";

const Wallpaper = () => {
  const [wallpaper, setWallpaper] = useState("");

  useEffect(() => {
    const localWallpaper = localStorage.getItem("wallpaper");
    console.log(localWallpaper);
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

  return (
    <div>
      <div className="wallpaper-container">
        <img src={wallpaper} alt="wallpaper" srcSet="" />
      </div>
    </div>
  );
};

export default Wallpaper;

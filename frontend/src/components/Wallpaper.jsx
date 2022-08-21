import React, { useState } from "react";
import wallpapersService from "../services/wallpapers";
import "./Wallpaper.css";

const Wallpaper = () => {
  const [wallpaper, setWallpaper] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    wallpapersService
      .getWallpaper()
      .then((res) => {
        console.log(res.urls.raw);
        setWallpaper(res.urls.raw);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <h1>Wallpaper</h1>
      <input type="button" value="get wallpaper" onClick={handleClick} />
      <div className="wallpaper-container">
        <img src={wallpaper} alt="wallpaper" srcSet="" />
      </div>
    </div>
  );
};

export default Wallpaper;

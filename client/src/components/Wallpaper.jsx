import React, { useEffect, useState } from 'react';
import wallpapersService from '../services/wallpapers';
import './Wallpaper.css';

const Wallpaper = () => {
  const [wallpaperDetails, setWallpaperDetails] = useState([]);

  const styles = {
    backgroundImage: `url(${wallpaperDetails.imgUrl})`,
  };

  const getWallpaper = () => {
    const localWallpaperDetails = JSON.parse(
      localStorage.getItem('wallpaper-details')
    );
    if (!localWallpaperDetails) {
      wallpapersService
        .getWallpaper()
        .then((res) => {
          setWallpaperDetails(res);
          localStorage.setItem('wallpaper-details', JSON.stringify(res));
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setWallpaperDetails(
        JSON.parse(localStorage.getItem('wallpaper-details'))
      );
    }
  };

  const handleSkip = () => {
    localStorage.removeItem('wallpaper-details');
    getWallpaper();
  };

  useEffect(() => {
    getWallpaper();
  }, []);

  return (
    <>
      <div
        style={styles}
        className='wallpaper-container'
      ></div>
      <div className='wallpaper-info'>
        <div className='wallpaper-info__card'>
          <p>{wallpaperDetails.location}</p>
          <a
            href={wallpaperDetails.sourceUrl}
            target='_blank'
            rel='noreferrer'
          >
            <p>{wallpaperDetails.artist}</p>
          </a>
          <a href='/'>
            <button onClick={handleSkip}>skip wallpaper</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Wallpaper;

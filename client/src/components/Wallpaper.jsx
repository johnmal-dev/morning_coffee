import React, { useEffect, useState } from 'react';
import wallpapersService from '../services/wallpapers';

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
        className='absolute h-full w-full bg-center bg-cover -z-50'
      ></div>
      <div className='absolute left-0 bottom-0 text-xs m-2 drop-shadow-lg'>
        <div>
          <p className=' select-none'>{wallpaperDetails.location}</p>
        </div>
        <div className='flex gap-x-0.5 mt-0.5'>
          <a
            href={wallpaperDetails.sourceUrl}
            target='_blank'
            rel='noreferrer'
          >
            <p className='hover:underline hover:-translate-y-0.5 transform transition'>
              {wallpaperDetails.artist}
            </p>
          </a>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4 cursor-pointer hover:text-red-500 hover:-translate-y-0.5 transform transition'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4 cursor-pointer hover:text-gray-400
            hover:-translate-y-0.5 transform transition'
            onClick={handleSkip}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3'
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Wallpaper;

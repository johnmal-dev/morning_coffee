import React from 'react';
import SettingsIcon from './SettingsIcon';
import HeartButton from './HeartButton';
import NextIcon from './NextIcon';

const WallpaperDetails = ({ wallpaperDetails, getWallpaper }) => {
  const handleSkip = () => {
    localStorage.removeItem('wallpaper-details');
    getWallpaper();
  };

  return (
    <div className='photo-info-container flex flex-col justify-center group text-[0.65rem]'>
      <div className=' group-hover:-translate-y-4 transform transition'>
        {wallpaperDetails.location}
      </div>
      <div className='absolute group-hover:translate-y-2 opacity-0 group-hover:opacity-80 transform transition flex flex-row gap-1'>
        <a
          href={wallpaperDetails.sourceUrl}
          target='_blank'
          rel='noreferrer'
        >
          <p>{wallpaperDetails.artist}</p>
        </a>
        <HeartButton />
        <NextIcon handleClick={handleSkip} />
      </div>
    </div>
  );
};

export default WallpaperDetails;

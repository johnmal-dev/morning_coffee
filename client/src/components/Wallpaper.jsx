import React, { useEffect } from 'react';

const Wallpaper = ({ wallpaperDetails, getWallpaper }) => {
  const styles = {
    backgroundImage: `url(${wallpaperDetails.imgUrl})`,
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
    </>
  );
};

export default Wallpaper;

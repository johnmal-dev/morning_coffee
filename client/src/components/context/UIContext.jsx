import React, { createContext, useState } from 'react';

export const UIContext = createContext();

function ContextUI({ children }) {
  const [wallpaperDetails, setWallpaperDetails] = useState([]);
  const [todos, setTodos] = useState([]);
  const [showClock, setShowClock] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <UIContext.Provider
      value={{
        wallpaperDetails,
        setWallpaperDetails,
        todos,
        setTodos,
        showClock,
        setShowClock,
        showAuthModal,
        setShowAuthModal,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export default ContextUI;

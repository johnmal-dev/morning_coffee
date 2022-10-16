import { createContext, useState } from "react";

export const AuthContext = createContext();

export const data = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  showLogin: false,
  setShowLogin: () => {},
};

const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, showLogin, setShowLogin }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

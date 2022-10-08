import { useState } from "react";
import AuthModal from "./AuthModal";
import SettingsIcon from "./SettingsIcon";

const Auth = ({ setIsLoggedIn, setUserDetails}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="btn">
        <SettingsIcon />
      </button>
      <AuthModal
        open={open}
        setOpen={setOpen}
        setIsLoggedIn={setIsLoggedIn}
        setUserDetails={setUserDetails}
      />
    </>
  );
};

export default Auth;

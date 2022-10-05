import { useState } from 'react';
import AuthModal from './AuthModal';
import SettingsIcon from './SettingsIcon';

const Auth = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className='btn'
      >
        <SettingsIcon />
      </button>
      <AuthModal
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default Auth;

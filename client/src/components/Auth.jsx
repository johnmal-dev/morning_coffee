import { useState } from 'react';
import AuthModal from './AuthModal';

const Auth = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='absolute left-0 top-0 my-2 mx-3'>
        <button
          onClick={() => setOpen(true)}
          className='btn'
        >
          Login
        </button>
      </div>
      <AuthModal
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default Auth;

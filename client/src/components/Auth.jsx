import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';
import AuthModal from './AuthModal';

const Auth = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='absolute left-0 top-0 m-2'>
        <button
          onClick={() => setOpen(true)}
          className='border-2 rounded p-1 text-sm cursor-pointer select-none opacity-80 hover:-translate-y-0.5 hover:opacity-100 transform transition active:bg-gray-100'
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

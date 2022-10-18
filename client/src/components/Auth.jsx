import { useContext } from 'react';
import AuthModal from './AuthModal';
import SettingsIcon from './SettingsIcon';
import { UIContext } from './context/UIContext';

const Auth = () => {
  const { setShowAuthModal } = useContext(UIContext);
  return (
    <>
      <button
        onClick={() => setShowAuthModal(true)}
        className='btn'
      >
        <SettingsIcon />
      </button>
      <AuthModal />
    </>
  );
};

export default Auth;

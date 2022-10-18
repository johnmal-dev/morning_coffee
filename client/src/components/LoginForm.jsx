import { useState, useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import axios from 'axios';

const LoginForm = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const { setError, setIsLoggedIn, setUserDetails, setOpen, setErrorMsg } =
    useContext(AuthContext);

  const loginHandler = async (e) => {
    e.preventDefault();
    console.log('loginHandler flag');
    const objToSend = {
      email: emailInput,
      password: passwordInput,
    };

    await axios
      .post('api/login', objToSend)
      .then((serverRes) => {
        setError(false);
        setIsLoggedIn(true);
        const data = serverRes.data;
        const { firstName, todos, wallpapers } = data;
        setUserDetails({
          firstName: firstName,
          todos: todos,
          wallpapers: wallpapers,
        });
        setEmailInput('');
        setPasswordInput('');
        setOpen(false);
        localStorage.setItem('name', firstName);
      })
      .catch((err) => {
        console.log(err.response.status);
        setError(true);
        err.response.status === 404 && setErrorMsg('invalid credentials');
        err.response.status === 401 &&
          setErrorMsg('incorrect email or password');
        err.response.status === 500 && setErrorMsg('server error');
      });
  };

  return (
    <div className='mt-2'>
      <form
        onSubmit={loginHandler}
        action='#'
        className='space-y-3'
      >
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700 text-left'
        >
          Email
        </label>
        <input
          type='text'
          name='email'
          id='email'
          className='mt-1 p-2 block w-full rounded-md h-10 border-gray-400 border-2 shadow-sm outline-2 outline- focus:border-indigo-500 focus:ring-indigo-500'
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          autoComplete='off'
          required
        />
        <label
          htmlFor='password'
          className='block text-sm font-medium text-gray-700 text-left'
        >
          Password
        </label>
        <input
          type='password'
          name='password'
          id='password'
          className='mt-1 p-2 block w-full rounded-md h-10 border-gray-400 border-2 shadow-sm outline-2 outline- focus:border-indigo-500 focus:ring-indigo-500'
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          required
        />
        <input
          type='submit'
          value='Log In'
          className='inline-flex w-40 justify-center rounded-md border bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm m-5'
        />
      </form>
    </div>
  );
};

export default LoginForm;

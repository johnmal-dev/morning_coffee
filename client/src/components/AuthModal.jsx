import { Fragment, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { SunIcon } from "@heroicons/react/24/outline";
// import { AuthContext } from "../store/AuthContext";
import axios from "axios";

const AuthModal = ({ open, setOpen, setIsLoggedIn, setUserDetails }) => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  // const data = useContext(AuthContext);
  // console.log(data);

  const loginHandler = async (e) => {
    e.preventDefault();
    console.log("loginHandler flag");
    const objToSend = {
      email: emailInput,
      password: passwordInput,
    };

    await axios
      .post("api/login", objToSend)
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
        setEmailInput("");
        setPasswordInput("");
        setOpen(false);
        localStorage.setItem("name", firstName);
      })
      .catch((err) => {
        console.log(err.response.status);
        setError(true);
        err.response.status === 404 && setErrorMsg("invalid credentials");
        err.response.status === 401 &&
          setErrorMsg("incorrect email or password");
        err.response.status === 500 && setErrorMsg("server error");
      });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  {error && (
                    <div className="text-center py-1 mb-2 bg-red-500 text-white rounded">
                      {errorMsg || "Unknown Error"}
                    </div>
                  )}
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <SunIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-1 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Morning Coffee
                    </Dialog.Title>
                    <div className="mt-2">
                      <form
                        onSubmit={loginHandler}
                        action="#"
                        className="space-y-3"
                      >
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 text-left"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="mt-1 p-2 block w-full rounded-md h-10 border-gray-400 border-2 shadow-sm outline-2 outline- focus:border-indigo-500 focus:ring-indigo-500"
                          value={emailInput}
                          onChange={(e) => setEmailInput(e.target.value)}
                          autoComplete="off"
                          required
                        />
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-gray-700 text-left"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="mt-1 p-2 block w-full rounded-md h-10 border-gray-400 border-2 shadow-sm outline-2 outline- focus:border-indigo-500 focus:ring-indigo-500"
                          value={passwordInput}
                          onChange={(e) => setPasswordInput(e.target.value)}
                          required
                        />
                        <input
                          type="submit"
                          value="Log In"
                          className="inline-flex w-40 justify-center rounded-md border bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm m-5"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AuthModal;

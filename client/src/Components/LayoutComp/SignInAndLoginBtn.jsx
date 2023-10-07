import React from "react";

export default function SignInAndLoginBtn({setModalShow}) {

    const handleLoginClick = () => {
        setModalShow(true);
        // setisLoggedIn(true);
      };
    
      const handleSignUpClick = () => {
        setModalShow(true);
        // setisLoggedIn(true);
      };
  return (
    <>
      <button
        type="button"
        className="w-full py-3 px-6 text-center rounded-full transition hover:bg-tc1 active:bg-yellow-200 sm:w-max"
        onClick={handleSignUpClick}
      >
        <span className="block text-tc2 font-semibold text-sm">Sign up</span>
      </button>
      <button
        type="button"
        className="w-full py-3 px-6 text-center rounded-full transition hover:bg-tc1 active:bg-yellow-400 sm:w-max"
        onClick={handleLoginClick}
      >
        <span className="block text-tc2 font-semibold text-sm">Login</span>
      </button>
    </>
  );
}

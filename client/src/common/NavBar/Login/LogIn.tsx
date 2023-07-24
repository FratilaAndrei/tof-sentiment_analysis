import React, { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import LoginPanel from "./LoginPanel";

const LogIn = () => {
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);

  const toggleLoginMenu = () => {
    setIsLoginMenuOpen((prev) => !prev);
  };

  const loginMenu = isLoginMenuOpen === true;

  return (
    <div className=" text-white bg-orange-500 py-1 px-8 2xl:px-24 2xl:py-4  rounded-md relative z-10">
      <div onClick={toggleLoginMenu}>
        <IoPersonCircle className="absolute -left-4 -top-0.5 2xl:-top-3 2xl:-left-6 bg-orange-600 text-4xl 2xl:text-8xl rounded-full" />
        <div className="2xl:text-4xl">Log In</div>
      </div>
      {loginMenu && (
        <div>
          <LoginPanel toggleLoginMenu={toggleLoginMenu} />
        </div>
      )}
    </div>
  );
};

export default LogIn;

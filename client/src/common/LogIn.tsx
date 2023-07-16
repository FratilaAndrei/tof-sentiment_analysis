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
    <div className=" text-white bg-orange-500 py-1 px-8 rounded-md relative">
      <div onClick={toggleLoginMenu}>
        <IoPersonCircle className="absolute -left-4 -top-0.5 bg-orange-600 text-4xl rounded-full" />
        <div>Log In</div>
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

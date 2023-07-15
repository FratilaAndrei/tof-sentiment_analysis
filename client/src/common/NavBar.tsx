import React, { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { FaTwitterSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";
import { BsStrava } from "react-icons/bs";
import logoImg from "../utils/image-removebg-preview.png";
import LogIn from "./LogIn";
import { CgClose } from "react-icons/cg";

const NavBar = () => {
  const [isHamburgerLoginOpen, setIsHamburgerLoginOpen] = useState(true);

  const toggleMenu = () => {
    setIsHamburgerLoginOpen((prev) => !prev);
  };

  const showHamburgerLoginMenu = isHamburgerLoginOpen === false;

  return (
    <div className=" bg-gradient-to-br from-orange-500 to-yellow-500 h-12 flex items-center justify-around  text-white relative ">
      <div className="w-1/3 h-full ">
        <img
          src={logoImg}
          alt="leTourDeFrance"
          className="h-24 bg-gradient-to-b  from-orange-500 to-yellow-500 rounded-b-full"
        />
      </div>
      <div className="w-1/3 flex gap-4 text-3xl">
        <FaTwitterSquare />
        <FiInstagram />
        <AiFillFacebook />
        <BsStrava />
      </div>
      <IoPersonCircle className="absolute text-4xl  top-1.5 right-32 bg-orange-600 rounded-full" />
      <div
        className="bg-orange-500  py-1 rounded-md shadow-md px-7 "
        onClick={toggleMenu}
        {...(isHamburgerLoginOpen ? <CgClose /> : <IoPersonCircle />)}
      >
        Log In
      </div>
      {showHamburgerLoginMenu && (
        <div className="absolute right-0 h-screen top-0 w-1/2 bg-orange-500">
          <CgClose
            onClick={toggleMenu}
            className="text-4xl mt-4 ml-4 text-slate-800 "
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;

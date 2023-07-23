import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";
import { BsStrava } from "react-icons/bs";
import logoImg from "../../utils/image-removebg-preview.png";
import LogIn from "./Login/LogIn";

const NavBar = () => {
  return (
    <div className=" bg-gradient-to-br from-orange-500 to-yellow-500 h-12 flex items-center justify-around  text-white relative ">
      <div className="w-1/3 h-full ">
        <a href="/">
          <img
            src={logoImg}
            alt="leTourDeFrance"
            className="h-24 bg-gradient-to-b  from-orange-500 to-yellow-500 rounded-b-full"
          />
        </a>
      </div>
      <div className="w-1/3 flex gap-4 text-3xl">
        <FaTwitterSquare className="hover:scale-125 hover:text-orange-600 " />
        <FiInstagram className="hover:scale-125 hover:text-orange-600 " />
        <AiFillFacebook className="hover:scale-125 hover:text-orange-600 " />
        <BsStrava className="hover:scale-125 hover:text-orange-600 " />
      </div>

      <LogIn />
    </div>
  );
};

export default NavBar;

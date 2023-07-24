import React from "react";
import { CgClose } from "react-icons/cg";
import logoImg from "../../../utils/image-removebg-preview.png";
import {
  AiFillFacebook,
  AiFillGoogleSquare,
  AiFillApple,
} from "react-icons/ai";
import LoginInput from "../Login/LoginInput";
import { FC } from "react";

type LoginPanelProps = {
  toggleLoginMenu: () => void;
  //oricare merge
  // toggleLoginMenu: any;
};

const LoginPanel: FC<LoginPanelProps> = ({ toggleLoginMenu }) => {
  return (
    <div className="fixed h-screen w-[450px] 2xl:w-1/3 right-0 top-0 bg-orange-500">
      <CgClose
        className="text-5xl 2xl:text-7xl mt-4 ml-4 text-slate-800"
        onClick={toggleLoginMenu}
      />
      <div className="h-32 w-32 2xl:h-64 2xl:w-64 bg-white rounded-full m-auto mt-8">
        <img src={logoImg} alt="" className="h-full w-full" />
      </div>
      <div className="mt-20 text-3xl flex flex-col items-center gap-4 2xl:text-6xl">
        <div className="font-bold">LOG IN</div>
        <div className="flex gap-2 text-4xl 2xl:text-5xl">
          <AiFillFacebook className="shadow-xl bg-orange-600" />
          <AiFillGoogleSquare className="shadow-xl bg-orange-600" />
          <AiFillApple className="shadow-xl bg-orange-600" />
        </div>
        <div className=" mt-4 text-lg 2xl:text-5xl gap-4 flex flex-col 2xl:mt-20 2xl:gap-16 ">
          <LoginInput
            inputFieldType="text"
            inputFieldTitle="Email Adress or Phone Number"
            inputFieldPlaceholder="Email Adress or Phone Number"
          />
          <LoginInput
            inputFieldType="password"
            inputFieldTitle="Password"
            inputFieldPlaceholder="Password"
          />
        </div>
        <div className="flex gap-8 2xl:gap-20 2xl:mt-4">
          <div className="flex gap-2 items-center">
            <input type="checkbox" />
            <div className="text-xl 2xl:text-4xl">Remembear me</div>
          </div>
          <div className="text-xl 2xl:text-4xl"> Forgot Password ? </div>
        </div>
        <input
          type="submit"
          className="bg-gradient-to-br from-zinc-500 to-zinc-700 px-14 py-2 rounded-xl text-xl 2xl:text-5xl mt-2 2xl:mt-20 "
        />
        <div className="mt-10 flex gap-4 items-center text-2xl 2xl:text-5xl">
          <div>Dont have an account? </div>
          <div> Sign Up</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPanel;

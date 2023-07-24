import React, { useState } from "react";
import { FC } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

type LoginInputProps = {
  inputFieldTitle: string;
  inputFieldPlaceholder: string;
  inputFieldType: "text" | "password";
};

const LoginInput: FC<LoginInputProps> = ({
  inputFieldTitle,
  inputFieldPlaceholder,
  inputFieldType,
}) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const togglePasswordShow = () => {
    setIsPasswordHidden((prev) => !prev);
  };

  return (
    <div className="w-80 2xl:w-[650px]">
      <div className="">{inputFieldTitle}</div>
      <div className="relative 2xl:py-4">
        <input
          type={isPasswordHidden ? inputFieldType : "text"}
          placeholder={inputFieldPlaceholder}
          required
          className="w-full py-2 flex pl-2 2xl:pl-6 text-black outline-none rounded-md mt-2"
        />
        {inputFieldType === "password" && (
          <div
            className="absolute -left-8 top-3 text-2xl 2xl:text-6xl 2xl:-left-16 2xl:top-8 "
            onClick={togglePasswordShow}
          >
            {isPasswordHidden ? <AiFillEye /> : <AiFillEyeInvisible />}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginInput;

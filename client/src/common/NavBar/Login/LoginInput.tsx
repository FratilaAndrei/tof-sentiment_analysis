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
    <div className="w-80">
      <div>{inputFieldTitle}</div>
      <div className="relative">
        <input
          type={isPasswordHidden ? inputFieldType : "text"}
          placeholder={inputFieldPlaceholder}
          required
          className="w-full py-2 flex pl-2 text-black outline-none rounded-md mt-2"
        />
        {inputFieldType === "password" && (
          <div
            className="absolute -left-8 top-3 text-2xl "
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

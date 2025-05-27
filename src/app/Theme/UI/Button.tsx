import React from "react";
import { ArrowIcon } from "../Icons/Icons";

interface ButtonProps {
  buttonText: string;
  bgColour: string;
  showArrow: boolean;
  showOutline: boolean;
  isDisabled: boolean;
  handleOnSubmit: () => void;
}

function Button({
  buttonText,
  bgColour,
  showArrow,
  showOutline,
  isDisabled,
  handleOnSubmit,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={` ${
        bgColour === "black"
          ? "md:py-[15px] bg-black text-white"
          : "md:py-2.5 bg-white text-black "
      }${
        showOutline === true ? "outline-1 outline-black" : ""
      } font-semibold md:px-8 text-sm px-6 py-3 font-roboto flex items-center justify-center rounded-full gap-x-3 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed`}
      disabled={isDisabled}
      onClick={handleOnSubmit}
    >
      {buttonText}
      {showArrow && <ArrowIcon />}
    </button>
  );
}

export default Button;

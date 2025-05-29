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
          ? " bg-black text-white"
          : "bg-white text-black "
      }${
        showOutline === true ? "outline-1 outline-black" : ""
      } font-semibold text-base px-6 py-3 flex items-center justify-center rounded-full gap-x-3 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed`}
      disabled={isDisabled}
      onClick={handleOnSubmit}
    >
      {buttonText}
      {showArrow && <ArrowIcon />}
    </button>
  );
}

export default Button;

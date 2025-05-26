import React from "react";
import { ArrowIcon } from "../Icons/Icons";

interface ButtonProps {
  buttonText: string;
  bgColour: string;
  showArrow: boolean;
  showOutline: boolean;
}

function Button({ buttonText, bgColour, showArrow, showOutline }: ButtonProps) {
  return (
    <button
      type="button"
      className={` ${
        bgColour === "white" ? "bg-white text-black" : "bg-black text-white"
      } ${
        bgColour === "black" ? " md:px-10 md:py-[15px]" : "md:px-10 md:py-2.5 "
      }${
        showOutline === true ? "outline-1 outline-black" : ""
      } font-semibold text-sm px-6 py-3 font-roboto flex items-center justify-center rounded-full gap-x-3 cursor-pointer`}
    >
      {buttonText}
      {showArrow && <ArrowIcon />}
    </button>
  );
}

export default Button;

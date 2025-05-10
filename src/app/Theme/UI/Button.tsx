import React from "react";

interface ButtonProps {
  buttonText: string;
  bgColour: string;
}

function Button({ buttonText, bgColour }: ButtonProps) {
  return (
    <button
      type="button"
      className={` ${
        bgColour === "white" ? "bg-white text-black" : "bg-black text-white"
      } ${
        bgColour === "black" ? " md:px-10 md:py-[15px]" : "md:px-10 md:py-2.5"
      } font-semibold text-sm px-8 py-2   font-roboto flex items-center`}
    >
      {buttonText}
    </button>
  );
}

export default Button;

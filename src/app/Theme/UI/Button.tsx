import React from "react";

interface ButtonProps {
  buttonText: string;
}

function Button({ buttonText }: ButtonProps) {
  return (
    <button
      type="button"
      className="text-black font-semibold bg-white text-sm px-8 py-2  md:px-10 md:py-2.5 font-roboto"
    >
      {buttonText}
    </button>
  );
}

export default Button;

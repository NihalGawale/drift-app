import React from "react";

interface ButtonProps {
  buttonText: string;
}

function OutlinedButton({ buttonText }: ButtonProps) {
  return (
    <button
      type="button"
      className="text-white font-semibold outline-1 outline-white text-sm px-8 py-2  md:px-10 md:py-2.5 font-roboto"
    >
      {buttonText}
    </button>
  );
}

export default OutlinedButton;

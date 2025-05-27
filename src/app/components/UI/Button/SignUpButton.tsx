import React from "react";

interface SignUpButtonProps {
  id?: string;
  buttonText: string;
  isRing: boolean;
}
function SignUpButton({ id, buttonText, isRing }: SignUpButtonProps) {
  return (
    <button
      key={id}
      className={`${
        isRing ? "ring-1 ring-black" : ""
      } py-[10px] px-4  rounded-full text-[16px] text-black cursor-pointer font-extrabold`}
    >
      {buttonText}
    </button>
  );
}

export default SignUpButton;

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
      } py-[10px] px-3.5  rounded-full text-[16px] font-medium text-black cursor-pointer`}
    >
      {buttonText}
    </button>
  );
}

export default SignUpButton;

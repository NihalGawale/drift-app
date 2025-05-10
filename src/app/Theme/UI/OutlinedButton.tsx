import React from "react";
import { Arrow } from "../Icons/Arrow";

interface OutlinedButtonProps {
  buttonText: string;
  showArrow: boolean;
  showOutline: boolean;
}

function OutlinedButton({
  buttonText,
  showArrow,
  showOutline,
}: OutlinedButtonProps) {
  return (
    <button
      type="button"
      className={` ${showArrow ? "flex gap-2" : ""} ${
        showOutline ? "outline-1 outline-white" : ""
      } text-white font-semibold  text-sm px-8 py-2  md:px-10 md:py-2.5 font-roboto items-center`}
    >
      {buttonText}
      {showArrow && <Arrow />}
    </button>
  );
}

export default OutlinedButton;

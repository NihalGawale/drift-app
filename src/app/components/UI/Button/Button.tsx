import React from "react";
import { Link } from "react-scroll";

interface ButtonProps {
  id?: string;
  buttonText: string;
  isClicked: boolean;
  offset: number | undefined;
  handleOnClickNavLink: (id: string | undefined) => void;
}
function Button({
  id,
  buttonText,
  isClicked,
  offset,
  handleOnClickNavLink,
}: ButtonProps) {
  return (
    <Link to={id as string} smooth={true} duration={400} offset={offset}>
      <button
        key={id}
        className={`${
          isClicked ? "bg-black text-white" : ""
        } py-[10px] px-5 rounded-full text-[17px] font-semibold  cursor-pointer`}
        onClick={() => handleOnClickNavLink(id)}
      >
        {buttonText}
      </button>
    </Link>
  );
}

export default Button;

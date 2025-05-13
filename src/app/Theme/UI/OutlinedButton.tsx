"use client";

import React from "react";
import { Arrow } from "../Icons/Arrow";
import { useRouter } from "next/navigation";

interface OutlinedButtonProps {
  id?: string;
  buttonText: string;
  showArrow: boolean;
  showOutline: boolean;
}

function OutlinedButton({
  id,
  buttonText,
  showArrow,
  showOutline,
}: OutlinedButtonProps) {
  const router = useRouter();
  return (
    <button
      type="button"
      className={` ${showArrow ? "flex gap-2" : ""} ${
        showOutline ? "outline-1 outline-white" : ""
      } text-white font-semibold  text-sm px-8 py-2  md:px-10 md:py-2.5 font-roboto items-center`}
      onClick={() => router.push(`/products/${id}`)}
    >
      {buttonText}
      {showArrow && <Arrow />}
    </button>
  );
}

export default OutlinedButton;

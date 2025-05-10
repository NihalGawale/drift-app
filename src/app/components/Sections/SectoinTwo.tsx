import { Themes } from "@/app/Theme/Theme";
import React from "react";

function SectoinTwo() {
  return (
    <div
      className="w-full h-[368px] flex justify-center items-center"
      style={{ backgroundColor: Themes.sectionGrayColour }}
    >
      <div className="w-[60%] h-[144px] flex justify-center">
        <p className="text-5xl font-extrabold">
          "Discover the vibrant colours of our <br /> sneaker—find the perfect
          pair to <br /> express your style!"
        </p>
      </div>
    </div>
  );
}

export default SectoinTwo;

import { Themes } from "@/app/Theme/Theme";
import React from "react";
import BannerDetails from "./bannerDetails";

function Banner() {
  return (
    <div
      className="w-full h-[700px] md:h-[900px] md:pt-[230px] flex justify-center items-center md:flex-none md:justify-start md:items-start "
      style={{ backgroundColor: Themes.sectionGrayColour }}
    >
      <div className="w-[335px] h-[284px] md:w-[70%] z-10 md:flex md:justify-center">
        <BannerDetails />
      </div>
    </div>
  );
}

export default Banner;

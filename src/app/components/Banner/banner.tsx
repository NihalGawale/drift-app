import { Themes } from "@/app/Theme/Theme";
import React from "react";
import BannerDetails from "./bannerDetails";

function Banner() {
  return (
    <div
      className="w-full h-[900px] flex items-center"
      style={{ backgroundColor: Themes.sectionGrayColour }}
    >
      <div className="z-10">
        <BannerDetails />
      </div>
    </div>
  );
}

export default Banner;

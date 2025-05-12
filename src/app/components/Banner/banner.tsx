"use client";

import React, { useEffect, useState } from "react";
import { Themes } from "@/app/Theme/Theme";
import BannerDetails from "./bannerDetails";
import Image from "next/image";

function Banner() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }

    updateWidth(); // Set width initially
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const breakpoint = 768;

  // ✅ Only render layout *after* width is set (i.e. on client)
  if (width === null) return null;
  return (
    <div className="md:relative w-full h-[950px]  md:h-[900px]  flex flex-col md:flex-none md:justify-start md:items-start ">
      <div className="w-full h-[600] md:h-full relative">
        <Image
          src={
            width > breakpoint
              ? "/assets/bannerImage.png"
              : "/assets/mobileBannerImg.png"
          }
          alt="sneaker2"
          fill={true}
        />
      </div>
      <div className="md:absolute md:mt-52 w-full h-[350px] md:w-[70%] md:z-10 md:flex md:justify-center">
        <BannerDetails width={width} breakpoint={breakpoint} />
      </div>
    </div>
  );
}

export default Banner;

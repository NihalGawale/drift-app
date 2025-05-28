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
    <div className="md:relative w-full h-[950px]  md:h-[850px] flex flex-col md:flex-none">
      <div className="w-full h-[600] md:h-full relative">
        {width > breakpoint ? (
          <Image src="/assets/bannerImage.png" alt="sneaker2" fill={true} />
        ) : (
          <video
            src="/videos/bannerImageVideo.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        )}
      </div>
      <div className="md:absolute bottom-[168px] left-[190px] w-full h-[350px] md:w-[70%] md:z-10 md:flex md:justify-start">
        <BannerDetails width={width} breakpoint={breakpoint} />
      </div>
    </div>
  );
}

export default Banner;

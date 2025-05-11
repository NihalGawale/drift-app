"use client";

import Button from "@/app/Theme/UI/Button";
import OutlinedButton from "@/app/Theme/UI/OutlinedButton";
import SectionLayout from "@/app/Theme/UI/SectionLayout";
import React, { useEffect, useState } from "react";

function SectionSix() {
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
    <SectionLayout>
      {width > breakpoint && (
        <div className=" w-[334px] h-[348px] md:w-[50%] md:h-[640px] bg-green-300 flex justify-center items-center ">
          <p className="text-6xl font-extrabold text-black">Sneaker Image 4</p>
        </div>
      )}
      <div className=" w-full h-[367px] flex items-center md:w-[50%] md:h-auto]">
        <div className=" w-full h-full md:h-[328px] flex flex-col gap-y-5 md:gap-y-8 justify-center align-middle">
          <p className="text-4xl md:text-5xl font-extrabold">
            Multiple Colors
            <br />
            Festival Vibes
          </p>
          <p className="font-medium">
            A bold mix of hues that feels like music, movement, and pure
            energy.Every colour tells a story — layered, loud, and
            unapologetically you.This is your personality in motion, made to
            stand out in every step.
          </p>
          <div className=" flex flex-row gap-x-4">
            <OutlinedButton
              buttonText="BUY NOW"
              showArrow={false}
              showOutline={true}
            />
            <OutlinedButton
              buttonText="EXPLORE"
              showArrow={true}
              showOutline={false}
            />
          </div>
        </div>
      </div>
      {width < breakpoint && (
        <div className=" w-[334px] h-[348px] md:w-[50%] md:h-[640px] bg-green-300 flex justify-center items-center ">
          <p className="text-6xl font-extrabold text-black">Sneaker Image 4</p>
        </div>
      )}
    </SectionLayout>
  );
}

export default SectionSix;

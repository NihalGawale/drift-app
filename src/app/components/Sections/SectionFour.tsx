"use client";

import Button from "@/app/Theme/UI/Button";
import OutlinedButton from "@/app/Theme/UI/OutlinedButton";
import SectionLayout from "@/app/Theme/UI/SectionLayout";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function SectionFour() {
  const [width, setWidth] = useState<number | null>(null);
  const id = "product2";
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
        <div className="relative w-[334px] h-[348px] md:w-[50%] md:h-[640px] flex justify-center items-center rounded-xl shadow-xl md:shadow-2xl shadow-gray-600 ">
          <Image
            className="rounded-xl"
            src="/assets/2.png"
            alt="sneaker2"
            fill={true}
          />
        </div>
      )}
      <div className="w-full h-[367px] flex items-center md:w-[50%] md:h-auto] ">
        <div className=" w-full h-full md:h-[328px] flex flex-col gap-y-5 md:gap-y-8 justify-center align-middle">
          <p className="text-4xl md:text-5xl font-extrabold">
            Pistachio <br />
            Freshly Picked
          </p>
          <p className="font-normal tracking-wide">
            Drawn from the first signs of spring, pistachio is both earthy and
            uplifting.
            <br />
            It connects you to nature — rooted, refreshing, and effortlessly
            stylish.This is colour with presence, made to energize your
            everyday.
          </p>
          <div className=" flex flex-row gap-x-4">
            <OutlinedButton
              buttonText="PRE ORDER"
              showArrow={false}
              showOutline={true}
            />
            <OutlinedButton
              id={id}
              buttonText="EXPLORE"
              showArrow={true}
              showOutline={false}
            />
          </div>
        </div>
      </div>
      {width < breakpoint && (
        <div className="relative w-[334px] h-[348px] md:w-[50%] md:h-[640px] flex justify-center items-center  rounded-xl shadow-xl md:shadow-2xl shadow-gray-600 ">
          <Image
            className="rounded-xl"
            src="/assets/2.png"
            alt="sneaker2"
            fill={true}
          />
        </div>
      )}
    </SectionLayout>
  );
}

export default SectionFour;

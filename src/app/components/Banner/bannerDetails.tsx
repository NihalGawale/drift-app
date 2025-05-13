import { roboto } from "@/app/Theme/Fonts/Fonts";
import Button from "@/app/Theme/UI/Button";
import OutlinedButton from "@/app/Theme/UI/OutlinedButton";
import React from "react";

interface BannerDetailsProps {
  width: number;
  breakpoint: number;
}

function BannerDetails({ width, breakpoint }: BannerDetailsProps) {
  return (
    <div className="w-full h-full md:w-[700px] md:h-[320px] md:mr-[60px] flex flex-col gap-y-6 md:gap-y-8 justify-center items-center md:justify-start md:items-start md:text-black">
      <div className="flex flex-col gap-y-5 md:gap-y-6 px-4 md:px-0">
        <h1
          className={`${roboto.className} font-extrabold text-5xl md:text-8xl text-center md:text-start`}
        >
          Glide Beyond the Usual
        </h1>
        <p className="text-[18px] font-normal tracking-wide text-center md:text-start">
          <span className="md:text-2xl font-semibold italic">DRIFT</span> is
          where bold design meets motion. Engineered for self-expression and
          designed to turn heads. Every pair speaks your pace, your power, your
          presence — redefine every step.
        </p>
      </div>

      {/* <div className=" flex flex-row gap-x-4">
        <Button
          buttonText="SHOP THE DROP"
          bgColour={width > breakpoint ? "black" : "white"}
        />
        <OutlinedButton
          buttonText="LEARN MORE"
          showArrow={false}
          showOutline={true}
        />
      </div> */}
    </div>
  );
}

export default BannerDetails;

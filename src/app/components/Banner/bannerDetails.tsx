import { anton, bebasNeue, roboto } from "@/app/Theme/Fonts/Fonts";
import Button from "@/app/Theme/UI/Button";
import OutlinedButton from "@/app/Theme/UI/OutlinedButton";
import React from "react";

function BannerDetails() {
  return (
    <div className="w-full h-full md:w-[700px] md:h-[320px] md:mr-[60px] flex flex-col gap-y-6 md:gap-y-8 ">
      <div className="flex flex-col gap-y-5 md:gap-y-6">
        <h1 className={`${roboto.className} font-extrabold text-5xl md:text-8xl`}>
          Glide Beyond the Usual
        </h1>
        <p className="text-[18px] font-normal tracking-wide">
          <span className="md:text-2xl font-semibold italic">DRIFT</span> is where bold
          design meets motion. Engineered for self-expression and designed to
          turn heads. Every pair speaks your pace, your power, your presence —
          redefine every step.
        </p>
      </div>

      <div className=" flex flex-row gap-x-4">
        <Button buttonText="SHOP THE DROP" bgColour="white" />
        <OutlinedButton
          buttonText="LEARN MORE"
          showArrow={false}
          showOutline={true}
        />
      </div>
    </div>
  );
}

export default BannerDetails;

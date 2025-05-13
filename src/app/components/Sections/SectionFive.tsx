import Button from "@/app/Theme/UI/Button";
import OutlinedButton from "@/app/Theme/UI/OutlinedButton";
import SectionLayout from "@/app/Theme/UI/SectionLayout";
import Image from "next/image";
import React from "react";

function SectionFive() {
  return (
    <SectionLayout>
      <div className=" w-full h-[367px] flex items-center md:w-[50%] md:h-auto]">
        <div className=" w-full  h-full md:h-[328px] flex flex-col gap-y-5 md:gap-y-8 justify-center align-middle">
          <p className="text-4xl md:text-5xl font-extrabold">
            Pure White <br />
            Snowfall Serenity
          </p>
          <p className="font-normal tracking-wide">
            Like untouched snow at dawn, pure white carries a sense of calm and
            stillness. It’s pure, poised, and powerful — made for those who move
            with intention.This isn’t just clean — it’s composed.
          </p>
          <div className=" flex flex-row gap-x-4">
            <OutlinedButton
              buttonText="PRE ORDER"
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
      <div className="relative w-[334px] h-[348px] md:w-[50%] md:h-[640px] flex justify-center items-center  rounded-xl shadow-xl md:shadow-2xl shadow-gray-600 ">
        <Image
          className="rounded-xl"
          src="/assets/3.png"
          alt="sneaker3"
          fill={true}
        />
      </div>
    </SectionLayout>
  );
}

export default SectionFive;

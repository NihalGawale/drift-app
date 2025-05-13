import { Themes } from "@/app/Theme/Theme";
import Button from "@/app/Theme/UI/Button";
import OutlinedButton from "@/app/Theme/UI/OutlinedButton";
import SectionLayout from "@/app/Theme/UI/SectionLayout";
import Image from "next/image";
import React from "react";

function SectionThree() {
  return (
    <SectionLayout>
      <div className="w-full h-[367px] flex items-center md:w-[50%] md:h-auto] ">
        <div className=" w-full h-full md:h-[328px] flex flex-col gap-y-5 md:gap-y-8 justify-center align-middle">
          <p className="text-4xl md:text-5xl font-extrabold">
            MOCHA MIST
          </p>
          <p className="font-normal tracking-wide">
            Like the comfort of your favourite café, these tones feel familiar
            yet special. <br />
            Soft beige and crisp white evoke quiet mornings, warm mugs, and slow
            beginnings.
            <br /> They bring a sense of calm — a reminder to move with ease and
            confidence.
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

      <div className="w-[334px] h-[348px] md:w-[50%] md:h-[640px] flex justify-center items-center shadow-xl md:shadow-2xl shadow-gray-600 relative">
        <Image
          className="rounded-xl"
          src="/assets/1.png"
          alt="sneaker1"
          fill={true}
        />
      </div>
    </SectionLayout>
  );
}

export default SectionThree;

import { Themes } from "@/app/Theme/Theme";
import Button from "@/app/Theme/UI/Button";
import OutlinedButton from "@/app/Theme/UI/OutlinedButton";
import SectionLayout from "@/app/Theme/UI/SectionLayout";
import React from "react";

function SectionThree() {
  return (
    <SectionLayout>
      <div className="flex items-center w-[50%] ">
        <div className=" w-full h-[328px] flex flex-col gap-y-8 justify-center align-middle">
          <p className="text-5xl font-extrabold">
            White & Beige <br /> Morning Brew
          </p>
          <p className="font-medium">
            Like the comfort of your favourite café, these tones feel familiar
            yet special. <br />
            Soft beige and crisp white evoke quiet mornings, warm mugs, and slow
            beginnings.
            <br /> They bring a sense of calm — a reminder to move with ease and
            confidence.
          </p>
          <div className=" flex flex-row gap-x-4">
            <Button buttonText="BUY NOW" bgColour="white" />
            <OutlinedButton
              buttonText="EXPLORE"
              showArrow={true}
              showOutline={false}
            />
          </div>
        </div>
      </div>

      <div className="w-[50%] h-[640px] bg-green-300 flex justify-center items-center ">
        <p className="text-6xl font-extrabold text-black">Sneaker Image 1</p>
      </div>
    </SectionLayout>
  );
}

export default SectionThree;

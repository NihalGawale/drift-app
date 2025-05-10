import Button from "@/app/Theme/UI/Button";
import OutlinedButton from "@/app/Theme/UI/OutlinedButton";
import SectionLayout from "@/app/Theme/UI/SectionLayout";
import React from "react";

function SectionFour() {
  return (
    <SectionLayout>
      <div className="w-[50%] h-[640px] bg-green-300 flex justify-center items-center ">
        <p className="text-6xl font-extrabold text-black">Sneaker Image 2</p>
      </div>
      <div className="flex items-center w-[50%] ">
        <div className=" w-full h-[328px] flex flex-col gap-y-8 justify-center align-middle">
          <p className="text-5xl font-extrabold">
            Pistachio <br />
            Freshly Picked
          </p>
          <p className="font-medium">
            Drawn from the first signs of spring, pistachio is both earthy and
            uplifting.
            <br />
            It connects you to nature — rooted, refreshing, and effortlessly
            stylish.This is colour with presence, made to energize your
            everyday.
          </p>
          <div className=" flex flex-row gap-x-4">
            <Button buttonText="BUY NOW" bgColour="white"  />
            <OutlinedButton
              buttonText="EXPLORE"
              showArrow={true}
              showOutline={false}
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default SectionFour;

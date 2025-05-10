import Button from "@/app/Theme/UI/Button";
import OutlinedButton from "@/app/Theme/UI/OutlinedButton";
import SectionLayout from "@/app/Theme/UI/SectionLayout";
import React from "react";

function SectionSix() {
  return (
    <SectionLayout>
      <div className="w-[50%] h-[640px] bg-green-300 flex justify-center items-center ">
        <p className="text-6xl font-extrabold text-black">Sneaker Image 4</p>
      </div>
      <div className="flex items-center w-[50%] ">
        <div className=" w-full h-[328px] flex flex-col gap-y-8 justify-center align-middle">
          <p className="text-5xl font-extrabold">
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
            <Button buttonText="BUY NOW" bgColour="white" />
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

export default SectionSix;

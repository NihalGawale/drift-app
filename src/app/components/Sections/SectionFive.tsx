import Button from "@/app/Theme/UI/Button";
import OutlinedButton from "@/app/Theme/UI/OutlinedButton";
import SectionLayout from "@/app/Theme/UI/SectionLayout";
import React from "react";

function SectionFive() {
  return (
    <SectionLayout>
      <div className="flex items-center w-[50%] ">
        <div className=" w-full h-[328px] flex flex-col gap-y-8 justify-center align-middle">
          <p className="text-5xl font-extrabold">
            Pure White <br />
            Snowfall Serenity
          </p>
          <p className="font-medium">
            Like untouched snow at dawn, pure white carries a sense of calm and
            stillness. It’s pure, poised, and powerful — made for those who move
            with intention.This isn’t just clean — it’s composed.
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
        <p className="text-6xl font-extrabold text-black">Sneaker Image 3</p>
      </div>
    </SectionLayout>
  );
}

export default SectionFive;

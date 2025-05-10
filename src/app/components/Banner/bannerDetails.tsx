import Button from "@/app/Theme/UI/Button";
import OutlinedButton from "@/app/Theme/UI/OutlinedButton";
import React from "react";

function BannerDetails() {
  return (
    <div className="w-[560px] h-[320px] ml-40 flex flex-col gap-8 ">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-extrabold">
          Glide Beyond the <br /> Usual
        </h1>
        <p className="font-medium">
          <span className="text-2xl font-semibold">DRIFT</span> is where bold
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

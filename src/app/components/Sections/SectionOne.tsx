import SectionLayout from "@/app/Theme/UI/SectionLayout";
import React from "react";

function SectionOne() {
  return (
    <SectionLayout>
      <div className=" w-[50%] h-[547px] flex flex-col gap-y-8 justify-center">
        <p>Elevate Every Step</p>
        <p className="text-5xl font-extrabold">Step Into the Future of Style</p>
        <div className="font-semibold flex flex-col gap-y-8">
          <p>
            <span className="text-2xl font-semibold">DRIFT</span> sneakers
            aren’t just designed — they’re engineered to move with purpose.
            Every pair is built with effortless comfort, premium materials, and
            bold aesthetics that match your drive. Whether you're on the streets
            or the move, you’re stepping into more than a look — you’re stepping
            into your future.
          </p>
          <div className="flex flex-col gap-4">
            <p>Engineered for all-day comfort, zero compromise.</p>
            <p>Designed to move — wherever you take them.</p>
            <p>A statement at every angle, from street to screen.</p>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[640px] bg-green-300 flex justify-center items-center ">
        <p className="text-6xl font-extrabold text-black">Video Container</p>
      </div>
    </SectionLayout>
  );
}

export default SectionOne;

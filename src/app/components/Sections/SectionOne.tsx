import SectionLayout from "@/app/Theme/UI/SectionLayout";
import React from "react";

function SectionOne() {
  // <SectionLayout>
  return (
    <div className="w-full h-[1000px]  md:h-[864px] flex justify-center items-center">
      <div className="w-[335px] h-[920px] md:w-[70%] md:h-[640px] flex flex-col justify-center md:items-center md:flex-row gap-y-12 md:gap-x-20">
        <div className="w-full md:w-[50%] h-[547px] flex flex-col gap-y-5 justify-center">
          <p>Elevate Every Step</p>
          <p className="text-4xl font-extrabold">
            Step Into the Future of Style
          </p>
          <div className="font-normal tracking-wide flex flex-col gap-y-5 md:gap-y-8">
            <p>
              <span className="text-xl italic md:text-2xl font-semibold">DRIFT</span> sneakers
              aren’t just designed — they’re engineered to move with purpose.
              Every pair is built with effortless comfort, premium materials,
              and bold aesthetics that match your drive. Whether you're on the
              streets or the move, you’re stepping into more than a look —
              you’re stepping into your future.
            </p>
            <div className="flex flex-col gap-4">
              <p>Engineered for all-day comfort, zero compromise.</p>
              <p>Designed to move — wherever you take them.</p>
              <p>A statement at every angle, from street to screen.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] h-[640px] bg-green-300 flex justify-center items-center pb-8">
          <p className="text-6xl font-extrabold text-black">Video Container</p>
        </div>
      </div>
    </div>
  );
}
{
  /* </SectionLayout> */
}

export default SectionOne;

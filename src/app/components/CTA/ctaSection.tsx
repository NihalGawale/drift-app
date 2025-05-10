import Button from "@/app/Theme/UI/Button";
import SectionLayout from "@/app/Theme/UI/SectionLayout";
import Image from "next/image";
import React from "react";

function CTASection() {
  return (
    <SectionLayout>
      <div className="w-[1200px] h-[462px] flex">
        <div className="w-[700px] h-full bg-white flex justify-center items-center">
          <div className="w-full h-[377px] p-12 flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-6">
              <p className="text-5xl text-black font-extrabold">
                Join the club of <br /> #Drifters
              </p>
              <p className="text-black">
                Be First to Know — our latest trends and exclusive offers!
              </p>
            </div>
            <div className="w-[550px] h-[82px] flex gap-x-4 items-center">
              <input
                className="w-[381px] h-[48px] border-2 border-black text-gray-500 p-3"
                placeholder="Your Email Here"
              />
              <Button buttonText="Join Now" bgColour="black" />
            </div>
          </div>
        </div>
        <div className=" relative w-[500px] h-full">
          <Image
            src="/assets/DRIFTERS.png"
            fill={true}
            alt="cta-image"
          />
        </div>
      </div>
    </SectionLayout>
  );
}

export default CTASection;

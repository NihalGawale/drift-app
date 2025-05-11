"use client";

import React, { useEffect, useState } from "react";
import Button from "@/app/Theme/UI/Button";
import SectionLayout from "@/app/Theme/UI/SectionLayout";
import Image from "next/image";

function CTASection() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }

    updateWidth(); // Set width initially
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const breakpoint = 768;

  // ✅ Only render layout *after* width is set (i.e. on client)
  if (width === null) return null;
  return (
    <SectionLayout>
      <div className="w-full h-[690px] md:w-[1200px] md:h-[462px] flex flex-col md:flex-row">
        <div className="w-full h-[406pxpx] md:w-[700px] md:h-full bg-white flex flex-col  md:justify-center items-center">
          <div className="w-full h-[406px] md:h-[377px] md:p-12 flex flex-col  gap-y-8 items-center md:items-start p-8">
            <div className="w-[271px] md:w-full flex flex-col gap-y-6">
              <p className="text-4xl md:text-5xl text-black font-extrabold">
                {width > breakpoint ? (
                  <>
                    Join the club of <br /> #Drifters
                  </>
                ) : (
                  <>
                    Join the club
                    <br /> of #Drifters
                  </>
                )}
              </p>
              <p className="text-black">
                Be First to Know — our latest trends and exclusive offers!
              </p>
            </div>
            <div className="w-[271px] h-[164px] md:w-[550px] md:h-[82px] flex flex-col md:flex-row gap-y-4  md:gap-x-4 justify-center items-center">
              <input
                className=" w-full md:w-[381px] h-[48px] border-2 border-black text-gray-500 p-3"
                placeholder="Your Email Here"
              />
              <button
                type="button"
                className="w-full bg-black text-white md:px-10 md:py-[15px] font-semibold text-sm px-6 py-4 font-roboto flex justify-center items-center"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
        <div className=" relative w-full md:w-[500px] h-[300px] md:h-full">
          <Image src="/assets/DRIFTERS.png" fill={true} alt="cta-image" />
        </div>
      </div>
    </SectionLayout>
  );
}

export default CTASection;

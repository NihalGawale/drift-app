import React from "react";
import { useEffect, useState } from "react";
import { roboto } from "@/app/Theme/Fonts/Fonts";
import Button from "@/app/Theme/UI/Button";
import { motion, AnimatePresence } from "framer-motion";

const rotatingWords = ["Usual", "Ordinary", "Expected"];

interface BannerDetailsProps {
  width: number;
  breakpoint: number;
}

function BannerDetails({ width, breakpoint }: BannerDetailsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000); // every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full md:w-[1000px] md:h-[320px] md:mr-[60px] flex flex-col gap-y-6 md:gap-y-8 justify-center items-center md:justify-start md:items-start">
      <div className="flex flex-col gap-y-5 md:gap-y-6 px-4 md:px-0">
        <h1
          className={`${roboto.className} font-extrabold text-5xl md:text-[80px] text-center md:text-start md:text-black`}
        >
          Glide Beyond the{" "}
          {/* <span className="relative"> */}
          <span className="relative h-[1.2em] w-[7ch] overflow-hidden ml-4 text-white">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[index]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="block absolute left-0 top-2"
              >
                {rotatingWords[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
        <p className="text-[18px] md:text-[20px] w-[75%] font-bold tracking-wide text-center md:text-start text-[#4B4B4B]">
          {/* <span className=""> */}
          Discover Drift — a premium sneaker brand redefining comfort and style
          for the modern explorer. Designed for all-day wear, our shoes blend
          streetwise aesthetics with performance-driven innovation.
          {/* </span> */}
        </p>
      </div>
      <Button
        buttonText="Explore"
        bgColour="black"
        showArrow={true}
        showOutline={false}
        isDisabled={false}
        handleOnSubmit={() => {}}
      />

      {/* <div className=" flex flex-row gap-x-4">
        <Button
          buttonText="SHOP THE DROP"
          bgColour={width > breakpoint ? "black" : "white"}
        />
        <OutlinedButton
          buttonText="LEARN MORE"
          showArrow={false}
          showOutline={true}
        />
      </div> */}
    </div>
  );
}

export default BannerDetails;

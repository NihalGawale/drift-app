import React from "react";
import { useEffect, useState } from "react";
import Button from "@/app/Theme/UI/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowIcon } from "@/app/Theme/Icons/Icons";

const rotatingWords = [
  "Usual",
  "Ordinary",
  "Expected",
  "Typical",
  "Conventional",
];

interface BannerDetailsProps {
  width: number;
  breakpoint: number;
}

function BannerDetails({ width, breakpoint }: BannerDetailsProps) {
  const [index, setIndex] = useState(0);
  const navigate = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000); // every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const handleOnSubmit = () => {
    navigate.push("/products/sneakers");
  };

  return (
    <div className="w-full h-full md:w-[80%] md:h-[320px] flex flex-col gap-y-8 md:justify-start md:items-start">
      <div className="flex flex-col gap-y-5 md:gap-y-6">
        <p className={`text-7xl text-black font-black -ml-1 font tracking-tight`}>
          Glide Beyond the
          <span className="relative h-[1em] w-[7ch] overflow-hidden ml-4 text-white">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[index]}
                initial={{ y: "50%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-50%", opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="block absolute left-0 top-0"
              >
                {rotatingWords[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </p>
        <p className="text-[18px] md:text-[20px] leading-8 w-[75%] text-center md:text-start text-[#4B4B4B] font-bold">
          Discover Drift — a premium sneaker brand redefining comfort and style
          for the modern explorer. Designed for all-day wear, our shoes blend
          streetwise aesthetics with performance-driven innovation.
        </p>
      </div>
      {/* <button
        type="button"
        className={`   bg-black text-white font-medium text-lg px-10 py-3 flex items-center justify-center rounded-full gap-x-3 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed tracking-wide`}
        onClick={handleOnSubmit}
      >
        Explore
        {<ArrowIcon />}
      </button> */}
    </div>
  );
}

export default BannerDetails;

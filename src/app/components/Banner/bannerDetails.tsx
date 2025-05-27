import React from "react";
import { useEffect, useState } from "react";
import Button from "@/app/Theme/UI/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

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
    navigate.push("/products");
  };

  return (
    <div className="w-full h-full md:w-[1000px] md:h-[320px] md:mr-[60px] flex flex-col gap-y-6 md:gap-y-8 justify-center items-center md:justify-start md:items-start">
      <div className="flex flex-col gap-y-5 md:gap-y-6 px-4 md:px-0">
        <h1
          className={`text-5xl md:text-[80px] text-center md:text-start md:text-black font-bold`}
        >
          Glide Beyond the
          <span className="relative h-[1em] w-[7ch] overflow-hidden ml-4 text-white">
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[index]}
                initial={{ y: "50%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-50%", opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="block absolute left-0 top-1"
              >
                {rotatingWords[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
        <p className="text-[18px] md:text-[20px] w-[75%] tracking-tight text-center md:text-start text-[#4B4B4B] font-extrabold">
          Discover Drift — a premium sneaker brand redefining comfort and style
          for the modern explorer. Designed for all-day wear, our shoes blend
          streetwise aesthetics with performance-driven innovation.
        </p>
      </div>
      <Button
        buttonText="Explore"
        bgColour="black"
        showArrow={true}
        showOutline={false}
        isDisabled={false}
        handleOnSubmit={handleOnSubmit}
      />
    </div>
  );
}

export default BannerDetails;

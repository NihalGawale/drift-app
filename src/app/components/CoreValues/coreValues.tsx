"use client";
import React, { useEffect } from "react";
import { coreValuesConst } from "@/app/constants/constant";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CoreValues = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const slideInFromBottom = {
    hidden: { opacity: 0, y: 100 }, // starts 100px below
    visible: {
      opacity: 1,
      y: 0, // moves to original position
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full h-[700px] bg-[#F2F1ED]  flex justify-center items-center">
      <div className="w-[80%] h-[80%]  flex flex-col justify-between mb-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={slideInFromLeft}
          className=" text-7xl font-black tracking-wide"
        >
          <p> Core Values</p>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={slideInFromBottom}
          className="w-full flex gap-x-4"
        >
          {coreValuesConst?.map((item) => (
            <div
              key={item.id}
              className="w-1/3 h-[400px]  rounded-2xl bg-white flex flex-col justify-center items-center px-10 shadow-xl"
            >
              <div className="h-[320px] flex flex-col items-center ">
                {item.icon}
                <div className="flex flex-col justify-center items-center gap-y-3 px-4 mt-10">
                  <p className="text-3xl font-bold"> {item.title}</p>
                  <p className="text-lg font-medium text-[#4B4B4B] tracking-normal text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CoreValues;

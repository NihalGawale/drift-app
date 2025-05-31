"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
const AboutUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Element
      name="about-us"
      className="w-full h-[900px]  bg-[#E6E4DC] py-[60px] relative flex justify-center"
    >
      <div className="w-[80%] h-full z-10 flex flex-col gap-y-20">
        <div className="w-1/2 flex flex-col gap-y-30 text-7xl font-black tracking-wide">
          About Us
        </div>
        <div className="w-full flex flex-row gap-8 justify-end items-end">
          <motion.img
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={slideInFromLeft}
            className="vw-1/2  w-[1600px] h-[1600px] rotate-38 absolute z-30 -top-70 -left-170"
            src="/assets/sneakerDummyImage.png"
            alt="About Us Sneaker"
          />
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={slideInFromRight}
            className="w-1/2 flex flex-col gap-8"
          >
            <p className="text-3xl font-black">
              More Than Just Sneakers. It’s a Way of Moving Through Life.
            </p>
            <p className="text-xl font-medium text-[#4B4B4B] tracking-wide leading-8">
              At Drift, we believe your journey deserves more than just shoes —
              it deserves a companion that moves with your rhythm. Our sneakers
              aren’t just designed to look good — they’re built to feel right,
              support your story, and keep up with the boldest version of you.
              From morning hustle to midnight walks, we obsess over every detail
              — so you can glide through life effortlessly. Every pair is a
              promise: comfort that lasts, design that speaks, and quality that
              keeps you grounded no matter where you're headed.
            </p>
            <div className="flex flex-col gap-y-6">
              <p className="text-3xl font-black text-black tracking-wide">
                Why Choose Drift
              </p>
              <p>
                <span className="font-medium text-lg">Made with Purpose </span>
                <span className="font-medium text-lg text-[#4B4B4B]">
                  – Sustainable materials that care for the planet
                </span>
              </p>
              <p>
                <span className="font-medium text-lg">
                  Handcrafted with Heart{" "}
                </span>
                <span className="font-medium text-lg text-[#4B4B4B]">
                  – Artisanal attention to detail in every stitch
                </span>
              </p>
              <p>
                <span className="font-medium text-lg">
                  Comfort that Carries You{" "}
                </span>

                <span className="font-medium text-lg text-[#4B4B4B]">
                  – Ergonomic design for real-world wear
                </span>
              </p>
            </div>
            {/* </div> */}
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default AboutUs;

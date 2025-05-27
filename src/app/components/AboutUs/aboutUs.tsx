"use client";

import React from "react";
import { Element } from "react-scroll";
const AboutUs = () => {
  return (
    <Element
      name="about-us"
      className="w-full h-[900px]  bg-[#E6E4DC] py-[60px] px-[84px] relative"
    >
      <div className="w-full h-full z-10 flex flex-col gap-y-20">
        <div className="w-1/2 flex flex-col gap-y-30 text-7xl font-bold tracking-wide">
          About Us
        </div>
        <div className="w-full flex flex-col gap-8 justify-end items-end">
          <div className="w-1/2"></div>
          <div className="w-1/2 flex flex-col gap-8">
            <p className="text-3xl font-bold">
              More Than Just Sneakers. It’s a Way of Moving Through Life.
            </p>
            <p className="text-lg font-extrabold text-[#4B4B4B]">
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
              <p className="text-3xl font-bold text-black">Why Choose Drift</p>
              <p>
                <span className="font-bold text-lg">Made with Purpose</span> –
                <span className="font-extrabold text-[#4B4B4B]"> Sustainable materials that care for the planet</span>
              </p>
              <p>
                <span className="font-bold text-lg">Handcrafted with Heart</span> –
                <span className="font-extrabold text-[#4B4B4B]"> Artisanal attention to detail in every stitch</span>
              </p>
              <p>
                <span className="font-bold text-lg">Comfort that Carries You</span> –
                <span className="font-extrabold text-[#4B4B4B]"> Ergonomic design for real-world wear</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default AboutUs;

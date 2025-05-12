"use client";

import { EmptyRatingStarIcon } from "@/app/Theme/Icons/EmptyRatingStarIcon";
import LeftArrowScroll from "@/app/Theme/Icons/LeftArrowScroll";
import { RatingStarIcon } from "@/app/Theme/Icons/RatingStarIcon";
import RightArrowScroll from "@/app/Theme/Icons/RightArrowScroll";
import { Themes } from "@/app/Theme/Theme";
import React, { useRef } from "react";

function CustomerTestimonial({ rating = 4 }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const totalSlides = 5; // number of testimonial cards
  const scrollRef = useRef<HTMLDivElement>(null);

  const displayRatingStar = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        i < rating ? (
          <RatingStarIcon key={i} />
        ) : (
          <EmptyRatingStarIcon key={i} />
        ),
      );
    }
    return stars;
  };

  const getSlideWidth = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768 ? 500 : 290;
    }
    return 290; // default fallback
  };

  const scroll = (direction: string) => {
    if (!scrollRef.current) return;

    const slideWidth = getSlideWidth();

    setCurrentSlide((prev) => {
      let nextSlide = direction === "right" ? prev + 1 : prev - 1;
      if (nextSlide >= totalSlides) nextSlide = 0;
      if (nextSlide < 0) nextSlide = totalSlides - 1;

      scrollRef?.current?.scrollTo({
        left: nextSlide * slideWidth, // 592 = card width
        behavior: "smooth",
      });

      return nextSlide;
    });
  };

  function SliderDots({ total = 4, current = 1 }) {
    return (
      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-white scale-125" : "bg-gray-500 opacity-50"
            }`}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className="w-full h-[800px] md:h-[864px] flex justify-center items-center relative"
      style={{ backgroundColor: Themes.sectionGrayColour }}
    >
      <div className="w-[80%] md:w-[70%] h-[660px] md:h-[640px] relative">
        <div className="flex flex-col gap-y-16">
          <div className="flex flex-col gap-y-6">
            <p className="text-5xl font-extrabold">Customer Testimonial</p>
            <p>See why they love every step.</p>
          </div>
          <div
            ref={scrollRef}
            className=" w-full flex overflow-auto font-normal tracking-wide hide-scrollbar gap-x-10 md:gap-x-0"
          >
            <div className="min-w-[250px] md:min-w-[592px]">
              <div className="flex flex-col gap-y-8 md:pr-20">
                <span className="flex gap-x-1">{displayRatingStar()}</span>
                <p className=" break-words">
                  I wasn’t sure what to expect, but after wearing these for a
                  few days, I can honestly say they’re a game-changer. The
                  comfort is next-level, and the design makes me feel confident
                  and unique. I’m finally wearing sneakers that match my style
                  and keep my feet happy!
                </p>
                <div>
                  <p>Nihal Gawale</p>
                  <p className="text-sm font-normal">
                    Nagpur, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
            <div className="min-w-[250px] md:min-w-[592px]">
              <div className="flex flex-col gap-y-8 md:pr-20">
                <span className="flex gap-x-1">{displayRatingStar()}</span>
                <p>
                  I wasn’t sure what to expect, but after wearing these for a
                  few days, I can honestly say they’re a game-changer. The
                  comfort is next-level, and the design makes me feel confident
                  and unique. I’m finally wearing sneakers that match my style
                  and keep my feet happy!
                </p>
                <div>
                  <p>Ashutosh Tiwari</p>
                  <p className="text-sm font-normal">
                    Nagpur, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
            <div className="min-w-[250px] md:min-w-[592px]">
              <div className="flex flex-col gap-y-8 md:pr-20">
                <span className="flex gap-x-1">{displayRatingStar()}</span>
                <p>
                  I wasn’t sure what to expect, but after wearing these for a
                  few days, I can honestly say they’re a game-changer. The
                  comfort is next-level, and the design makes me feel confident
                  and unique. I’m finally wearing sneakers that match my style
                  and keep my feet happy!
                </p>
                <div>
                  <p>Sheeshir Upadhyay</p>
                  <p className="text-sm font-normal">
                    Nagpur, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
            <div className="min-w-[250px] md:min-w-[592px]">
              <div className="flex flex-col gap-y-8 md:pr-20">
                <span className="flex gap-x-1">{displayRatingStar()}</span>
                <p>
                  I wasn’t sure what to expect, but after wearing these for a
                  few days, I can honestly say they’re a game-changer. The
                  comfort is next-level, and the design makes me feel confident
                  and unique. I’m finally wearing sneakers that match my style
                  and keep my feet happy!
                </p>
                <div>
                  <p>Aadesh Ghanote</p>
                  <p className="text-sm font-normal">
                    Nagpur, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
            <div className="min-w-[250px] md:min-w-[592px]">
              <div className="flex flex-col gap-y-8 md:pr-20">
                <span className="flex gap-x-1">{displayRatingStar()}</span>
                <p className="break-words">
                  I wasn’t sure what to expect, but after wearing these for a
                  few days, I can honestly say they’re a game-changer. The
                  comfort is next-level, and the design makes me feel confident
                  and unique. I’m finally wearing sneakers that match my style
                  and keep my feet happy!
                </p>
                <div>
                  <p>Yash Bhole</p>
                  <p className="text-sm font-normal">
                    Nagpur, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-3 md:bottom-32 left-0 md:right-1 mb-2 mr-0 md:mr-2 z-10">
            <SliderDots total={totalSlides} current={currentSlide} />
          </div>
          <div className="absolute bottom-0 md:bottom-[100px] right-0 md:right-1 md:mb-2 mr-0 md:mr-2 z-10 flex justify-end gap-x-4">
            <button
              onClick={() => scroll("left")}
              disabled={currentSlide === 0}
              className={`hover:cursor-pointer ${
                currentSlide === 0 ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              <LeftArrowScroll />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={currentSlide === totalSlides - 1}
              className={`hover:cursor-pointer ${
                currentSlide === totalSlides - 1
                  ? "opacity-40 cursor-not-allowed"
                  : ""
              }`}
            >
              <RightArrowScroll />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerTestimonial;

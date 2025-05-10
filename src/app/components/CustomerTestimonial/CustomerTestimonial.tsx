"use client";

import { EmptyRatingStarIcon } from "@/app/Theme/Icons/EmptyRatingStarIcon";
import LeftArrowScroll from "@/app/Theme/Icons/LeftArrowScroll";
import { RatingStarIcon } from "@/app/Theme/Icons/RatingStarIcon";
import RightArrowScroll from "@/app/Theme/Icons/RightArrowScroll";
import { Themes } from "@/app/Theme/Theme";
import React, { useRef } from "react";

function CustomerTestimonial({ rating = 4 }) {
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

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      scrollRef?.current?.scrollBy({
        left: direction === "right" ? 580 : -580,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="w-full h-[864px] flex justify-center items-center relative"
      style={{ backgroundColor: Themes.sectionGrayColour }}
    >
      <div className="w-[70%] h-[640px] relative">
        <div className="flex flex-col gap-y-20">
          <div className="flex flex-col gap-y-6">
            <p className="text-5xl font-extrabold">Customer Testimonial</p>
            <p>See why they love every step.</p>
          </div>
          <div
            ref={scrollRef}
            className=" w-full flex overflow-auto font-medium hide-scrollbar"
          >
            <div className="min-w-[592px]">
              <div className="flex flex-col gap-y-8 pr-20">
                <span className="flex gap-x-1">{displayRatingStar()}</span>
                <p>
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
            <div className="min-w-[592px]">
              <div className="flex flex-col gap-y-8 pr-16">
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
            <div className="min-w-[592px]">
              <div className="flex flex-col gap-y-8 pr-16">
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
            <div className="min-w-[592px]">
              <div className="flex flex-col gap-y-8 pr-16">
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
            <div className="min-w-[592px]">
              <div className="flex flex-col gap-y-8 pr-16">
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
          <div className="absolute bottom-32 right-1 mb-2 mr-2 z-10 flex justify-end gap-x-4">
            <div
              onClick={() => scroll("left")}
              className="hover:cursor-pointer"
            >
              <LeftArrowScroll />
            </div>
            <div
              onClick={() => scroll("right")}
              className="hover:cursor-pointer"
            >
              <RightArrowScroll />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerTestimonial;

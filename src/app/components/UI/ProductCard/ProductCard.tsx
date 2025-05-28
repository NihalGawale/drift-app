"use client";

import React from "react";
import { RupeeIcon } from "../../../Theme/Icons/Icons";
import Button from "@/app/Theme/UI/Button";
import Image from "next/image";

// This card is used on Home Page in Products Section
const ProductCard = () => {
  return (
    <div className="w-full max-w-1/4 h-[550px] border-gray-200 rounded-lg bg-gradient-to-br from-[#fdfdfd] via-[#f7f7f7] to-[#d6d6d6] text-black relative flex flex-col justify-end shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="absolute top-4 left-4 px-2 w-auto rounded-full border-1 flex items-center h-[32px] bg-white text-red-600 font-semibold">
        20% Off
      </div>
      <div className="w-[350px] h-[350px] rotate-[25deg] -rotate-y-12 rotate-z-5">
        <Image
          src="/assets/dummyProductImage.png"
          alt="product image"
          fill={true}
        />
      </div>
      <div className="px-5 py-8 flex flex-col gap-y-2">
        <h5 className="text-[22px] font-semibold leading-7">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>
        <div className="flex flex-col space-x-0.5 font-semibold">
          <div className="flex gap-x-2">
            <span className="text-lg text-red-600">
              Special Launch Offer :{" "}
            </span>
            <span className="flex">
              <RupeeIcon fill="#e7000b" width="18px" height="30px" />
              <span className="text-lg text-red-600">2999</span>
            </span>
          </div>
          <div className="flex gap-x-2 text-gray-400">
            <span className="text-base pt-[1px]">MRP : </span>
            <span className="flex line-through">
              <RupeeIcon fill="#99a1af" width="14px" height="23 px" />
              <span className=" text-base pt-[1px]">4299</span>
            </span>
          </div>
        </div>
        <div className="flex gap-x-4 mt-3 justify-center">
          <Button
            buttonText="Add To Cart"
            bgColour="white"
            showArrow={false}
            showOutline={true}
            isDisabled={false}
            handleOnSubmit={() => {}}
          />
          <Button
            buttonText="Explore"
            bgColour="black"
            showArrow={true}
            showOutline={false}
            isDisabled={false}
            handleOnSubmit={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

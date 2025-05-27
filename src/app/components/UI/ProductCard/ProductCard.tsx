"use client";

import React from "react";
import { RupeeIcon } from "../../../Theme/Icons/Icons";
import Button from "@/app/Theme/UI/Button";
import Image from "next/image";

// This card is used on Home Page in Products Section
const ProductCard = () => {
  return (
    <div className="w-full max-w-[450px] h-[550px]  border border-gray-200 rounded-lg bg-gradient-to-br from-[#fdfdfd] via-[#f7f7f7] to-[#f0f0f0] text-black relative flex flex-col justify-end shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="absolute top-4 left-4 p-2.5 w-auto rounded-full border-1 flex items-center h-[36px] bg-white text-red-600">
        20% Off
      </div>
      <div className="w-[450px] h-[450px] absolute -top-[20%] -left-8  -rotate-8">
        <Image
          src="/assets/dummyProductImage.png"
          alt="product image"
          fill={true}
        />
      </div>
      <div className="px-8 pb-5 flex flex-col gap-y-2">
        <h5 className="text-[22px] font-semibold tracking-tight">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>
        <div className="flex flex-col space-x-0.5 font-semibold">
          <div className="flex gap-x-2">
            <span className="text-xl text-red-600">Special Launch Offer : </span>
            <span className="flex">
              <RupeeIcon fill="#e7000b" width="18px" height="30px" />
              <span className="text-xl text-red-600">2999</span>
            </span>
          </div>
          <div className="flex gap-x-2 text-gray-400">
            <span className="text-lg">MRP : </span>
            <span className="flex line-through">
              <RupeeIcon fill="#99a1af" width="16px" height="25px" />
              <span className="pt-0.5">4299</span>
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

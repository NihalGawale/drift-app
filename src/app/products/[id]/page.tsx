"use client";
import { RupeeIcon, SizeGuidIcon } from "@/app/Theme/Icons/Icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const imageUrls = [
  "/assets/1.png",
  "/assets/2.png",
  "/assets/3.png",
  "/assets/4.png",
];

const items = imageUrls.map((url) => ({
  original: url,
  thumbnail: url,
  renderItem: () => (
    <PhotoProvider>
      <PhotoView src={url}>
        <img
          src={url}
          alt="drift-sneaker"
          style={{ width: "100%", borderRadius: 8 }}
        />
      </PhotoView>
    </PhotoProvider>
  ),
}));
function ProductDetails() {
  const [activeIndex, setActiveIndex] = useState(0);

  const shoeSizes = [
    { id: "1", size: "UK-6" },
    { id: "2", size: "UK-7" },
    { id: "3", size: "UK-8" },
    { id: "4", size: "UK-9" },
    { id: "5", size: "UK-10" },
  ];

  return (
    <div className="w-full h-full flex justify-center overflow-auto">
      <div className="w-[60%] h-[900px] flex items-end">
        <div className="w-full h-[90%] flex  gap-x-6">
          <div className="w-[60%] h-full flex justify-end items-center">
            <div className="w-auto h-auto flex gap-x-4">
              <div className="flex flex-col gap-2">
                {imageUrls.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`w-20 h-20 object-cover rounded-md cursor-pointer transition-all duration-200 ${
                      activeIndex === index
                        ? "border-none scale-105"
                        : "border-gray-300"
                    }`}
                  />
                ))}
              </div>
              {/* Main image on the right */}
              <div className="relative w-[550px] h-[680px] overflow-hidden shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={imageUrls[activeIndex]}
                    src={imageUrls[activeIndex]}
                    alt="Active Sneaker"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-0 left-0 w-full h-full "
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-full pt-16 font-semibold pr-8">
            <div className="w-full h-full flex flex-col gap-y-16">
              <div className="flex flex-col gap-y-2">
                <div>
                  <p className="text-3xl font-bold">Drift Solace Sneakers</p>
                  <p className="text-xl font-medium text-[#4B4B4B]">
                    Style that keeps up.
                  </p>
                </div>
                <div className="flex flex-col space-x-0.5 font-semibold">
                  <div className="flex gap-x-2">
                    <span className="text-lg text-red-600">
                      Special Launch Offer:
                    </span>
                    <span className="flex">
                      <RupeeIcon fill="#e7000b" width="17px" height="26px" />
                      <span className="text-lg text-red-600">2999</span>
                    </span>
                  </div>
                  <div className="flex gap-x-2 text-gray-400">
                    <span className="text-base pt-[2px]">MRP: </span>
                    <span className="flex line-through">
                      <RupeeIcon fill="#99a1af" width="14px" height="23px" />
                      <span className=" text-base pt-[1px]">4299</span>
                    </span>
                  </div>
                  <p className="font-medium text-sm tracking-wide text-[#4B4B4B] ">
                    Inclusive of all taxes
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-12 ">
                <div className="flex flex-col gap-y-5 ">
                  <div className="flex gap-x-2">
                    <p className="font-bold text-lg">Color: </p>
                    <p className="text-[#4B4B4B] text-lg flex items-end">
                      White Beige Royal-Blue
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <p className="font-bold text-lg"> Size</p>
                      <div className="font-semibold text-base flex items-center gap-x-2">
                        <SizeGuidIcon />
                        <p className="flex items-center">Size Guide</p>
                      </div>
                    </div>
                    <div className="text-[#4B4B4B] text-lg flex items-end gap-x-2">
                      {shoeSizes.map((item) => (
                        <button
                          key={item.id}
                          className="border border-[#b9b9b9] px-2.5 py-4 text-sm cursor-pointer font-extralight-"
                        >
                          {item.size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <button className="bg-black text-white py-3 w-full text-xl font-semibold cursor-pointer">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-y-5">
                <p className="font-bold text-lg">Descripiton</p>
                <p>
                  Step into your new daily essential—where modern minimalism
                  meets all-day wearability. Crafted in soft, breathable
                  materials with warm, neutral tones, Drift Solace is designed
                  to elevate your look without trying too hard. Whether you're
                  headed to a café, catching a flight, or moving through your
                  9-to-9, this pair blends seamlessly with your lifestyle.
                </p>
                <div>
                  <p >Color: White Beige Royal-Blue</p>
                  <p >Country of Origin: India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

"use client";

import { useState } from "react";
import Footer from "@/app/components/Footer/Footer";
import ProductCard from "@/app/components/UI/ProductCard/ProductCard";
import { RupeeIcon, ShippingIcon, SizeGuidIcon } from "@/app/Theme/Icons/Icons";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "react-image-gallery/styles/css/image-gallery.css";
import "react-photo-view/dist/react-photo-view.css";
import Breadcrumbs from "@/app/components/UI/Breakcrumbs/Breakcrumbs";
import Link from "next/link";
import AdsNavBar from "@/app/components/common/adsNavBar";
import Image from "next/image";
import { useRouter } from "next/navigation";

const imageUrls = [
  "/assets/1.png",
  "/assets/2.png",
  "/assets/3.png",
  "/assets/4.png",
  "/assets/1.png",
  "/assets/2.png",
  "/assets/3.png",
  "/assets/4.png",
];

const productsImageRoute = [
  { image: "products-image.png" },
  { image: "products-image-2.png" },
  { image: "products-image.png" },
  { image: "products-image-2.png" },
];

function ProductDetails() {
  const navigate = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref] = useInView({ triggerOnce: true, threshold: 0.2 });

  const shoeSizes = [
    { id: "1", size: "UK-6" },
    { id: "2", size: "UK-7" },
    { id: "3", size: "UK-8" },
    { id: "4", size: "UK-9" },
    { id: "5", size: "UK-10" },
  ];

  function ads() {
    return (
      <>
        <p>LIMITED TIME OFFER</p>
        <p>FLAT 30% OFF</p>
        <p>Only for first 100 pairs, Hurry Up!</p>
      </>
    );
  }

  return (
    <div className="w-full h-full flex justify-center items-center overflow-auto flex-col">
      <div
        onClick={() => navigate.push("/")}
        className="w-full h-16 bg-black flex gap-4 justify-center items-center"
      >
        <div className="w-[44px] h-[24px] relative">
          <Image
            src="/assets/brand-logo-white.png"
            alt="drift-brand-logo"
            fill={true}
          />
        </div>
        <div className="w-[94px] h-[24px] relative">
          <Image
            src="/assets/brand-name-white.png"
            alt="drift-brand-name"
            fill={true}
          />
        </div>
      </div>
      <AdsNavBar children={ads()} />

      <div className="w-[60%] h-auto flex flex-col mt-16 gap-y-4">
        <div className="ml-12">
          <Breadcrumbs />
        </div>
        <div className="w-full h-full flex gap-x-6 pb-10">
          <div className="w-[60%] h-full">
            <div className="w-auto h-auto flex justify-end gap-x-2">
              <div className="flex flex-col gap-2">
                {imageUrls.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`w-16 h-16 object-cover rounded-md cursor-pointer transition-all duration-200 ${
                      activeIndex === index
                        ? "border-none scale-105"
                        : "border-gray-300"
                    }`}
                  />
                ))}
              </div>
              {/* Main image on the right */}
              <div className="relative w-[550px] h-[680px] overflow-hidden rounded-md">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={imageUrls[activeIndex]}
                    src={imageUrls[activeIndex]}
                    alt="Active Sneaker"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.1 }}
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="w-[40%] h-full font-medium pr-8 -mt-1">
            <div className="w-full h-full flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-2">
                <div>
                  <p className="text-3xl font-bold">Drift Solace Sneakers</p>
                  <p className="text-base font-medium text-[#4B4B4B]">
                    Style that keeps up.
                  </p>
                </div>
                <div className="flex flex-col space-x-0.5 font-medium">
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
              <div className="flex flex-col gap-y-10">
                <div className="flex flex-col gap-y-5 ">
                  <div className="flex gap-x-2">
                    <p className="font-bold text-lg">Color: </p>
                    <p className="text-[#4B4B4B] text-lg flex items-end">
                      White Beige Royal-Blue
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <p className="font-bold text-lg"> Size</p>
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
                  <div>
                    <div className="font-medium text-base flex items-center gap-x-2">
                      <SizeGuidIcon />
                      <p className="flex items-center">Size Guide</p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-y-5">
                  <button className="bg-black text-white py-3 w-full text-xl font-medium cursor-pointer">
                    Grab the Deal
                  </button>
                  <div className="flex flex-col gap-y-2">
                    <div className="flex gap-x-3">
                      <ShippingIcon />
                      <p className="h-full text-[#578412] font-bold flex items-center justify-center mt-2">
                        Good news – we’ve got the shipping covered.
                      </p>
                    </div>
                    <p className="h-full text-[#4B4B4B] font-bold">
                      #Drifters enjoy{" "}
                      <span className="text-black">free returns.</span>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-y-3">
                    <p className="text-[#4B4B4B] font-semibold">
                      Enter your pincode to check if we deliver to your area.
                    </p>
                    <div>
                      <label
                        htmlFor="pincode"
                        className="text-xs font-bold tracking-wide"
                      >
                        PIN CODE
                      </label>
                      <div className="w-full h-[50px] flex space-x-2">
                        <input
                          id="pincode"
                          type="tel"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          maxLength={6}
                          placeholder="PIN CODE"
                          className="w-[70%] border border-black pl-2 tracking-widest flex justify-center "
                          onInput={(e: any) => {
                            e.target.value = e.target.value.replace(/\D/g, "");
                          }}
                        />
                        <button className="w-[30%] bg-black text-white">
                          CHECK
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-5">
                <p className="font-bold text-lg">Descripiton</p>
                <p className="text-[#4B4B4B] text-base">
                  Step into your new daily essential—where modern minimalism
                  meets all-day wearability. Crafted in soft, breathable
                  materials with warm, neutral tones, Drift Solace is designed
                  to elevate your look without trying too hard. Whether you're
                  headed to a café, catching a flight, or moving through your
                  9-to-9, this pair blends seamlessly with your lifestyle.
                </p>
                <div className="text-[#4B4B4B]  text-base">
                  <p>Color: White Beige Royal-Blue</p>
                  <p>Country of Origin: India</p>
                </div>
              </div>
              <div className="flex flex-col gap-y-5">
                <p className="font-bold text-lg">Shipping & Returns</p>
                <p className="text-[#4B4B4B] text-base">
                  Free return on all qualifying orders within 7 days of your
                  order delivery date. Visit our{" "}
                  <Link
                    href=""
                    className="underline underline-offset-4 decoration-2 decoration-[#b4aeae]"
                  >
                    {" "}
                    Return Policy{" "}
                  </Link>{" "}
                  for more information.
                </p>
                <p className="text-[#4B4B4B]  text-base">
                  For any queries, please contact Customer Service on email at
                  <span className="text-black font-medium">
                    {" "}
                    teamdriftwear@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto bg-[#F2F1ED] px-[50px] pt-20 pb-40 ">
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-3">
            <p className="text-5xl font-semibold mb-10">
              Style That Moves With You.
            </p>
            <p className="text-2xl font-extralight">
              Meet the DRIFT Solace — a sneaker designed to match your pace,
              your mood, and your story.
            </p>
            <p className="text-[17px] font-extralight text-[#4B4B4B]">
              Crafted in premium PU leather with beighe overlays and royal navy
              accents, Solace blends minimalist curves with bold attitude. It’s
              more than a sneaker — it’s your everyday essential reimagined.
              Whether you're walking the streets, owning your moment, or
              dressing down with confidence, DRIFT Solace brings together
              timeless design and modern edge — rooted proudly in Indian
              craftsmanship.
            </p>
          </div>
          <div className="flex gap-x-4">
            <ProductCard productsImageRoute={productsImageRoute} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;

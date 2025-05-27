"use client";

import ProductCard from "@/app/components/UI/ProductCard/ProductCard";
import Button from "@/app/Theme/UI/Button";
import React from "react";

function ProductSection() {
  return (
    <div className="w-full h-auto  bg-[#F2F1ED] py-[60px] px-[84px] relative">
      <div className="w-full h-full z-10 flex flex-col gap-y-20">
        <div className="w-[50%] flex flex-col gap-y-30">
          <h3 className="text-7xl">Products</h3>
          <div className="flex flex-col gap-8">
            <p className="text-3xl">
              Find You Perfect Pair, Express Your Style
            </p>
            <p className="text-lg">
              At Drift, we don’t just make sneakers — we craft what moves you.
              Every pair in our collection is designed to support your stride,
              elevate your style, and carry your story. Whether you're chasing
              dreams, catching sunsets, or just showing up as your boldest self
              — your shoes should feel like they belong. Built for comfort.
              Designed for expression. Worn with purpose. Because when you walk
              in Drift, you glide beyond the usual.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center gap-x-20">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="w-full flex justify-center mt-10">
          <button className=" bg-black text-white hover:bg-white hover:text-black shadow-xl font-semibold text-lg px-8 py-4 font-roboto flex items-center justify-center rounded-full gap-x-3 cursor-pointer">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;

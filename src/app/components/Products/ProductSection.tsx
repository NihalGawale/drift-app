"use client";

import React, { useEffect } from "react";
import ProductCard from "@/app/components/UI/ProductCard/ProductCard";
import { useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const productsImageRoute = [
  { image: "products-image.png" },
  { image: "products-image.png" },
  { image: "products-image.png" },
  { image: "products-image.png" },
];

function ProductSection() {
  const navigate = useRouter();
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

  const handleViewProducts = () => {
    navigate.push("/products");
  };

  return (
    <div className="w-full h-auto  bg-[#F2F1ED] py-[60px] flex justify-center relative overflow-hidden">
      <div className="w-[80%] h-full z-10 flex flex-col gap-y-20 ">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={slideInFromLeft}
          className="w-[50%] flex flex-col gap-y-20"
        >
          <h3 className="text-7xl font-black">Products</h3>

          {/* <div className="flex flex-col gap-8 ">
            <p className="text-4xl font-black">
              Find You Perfect Pair, Express Your Style
            </p>
            <p className="text-xl font-medium leading-8 text-[#4B4B4B]">
              At Drift, we don’t just make sneakers — we craft what moves you.
              Every pair in our collection is designed to support your stride,
              elevate your style, and carry your story. Whether you're chasing
              dreams, catching sunsets, or just showing up as your boldest self
              — your shoes should feel like they belong.
            </p>
            <div>
              <p className="text-xl font-medium leading-8 text-black">
                Built for comfort. Designed for expression. Worn with purpose.
              </p>
              <p className="text-xl font-medium leading-8 text-[#4B4B4B]">
                Because when you walk in Drift, you glide beyond the usual.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.img
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={slideInFromRight}
          className="vw-1/2  w-[935px] h-[935px] absolute z-30 top-20 -right-70"
          src="/assets/rockImage.png"
          alt="products-rock-image"
        />
     */}
        </motion.div>
        <div className="w-full flex justify-center gap-x-3 z-30">
          <ProductCard productsImageRoute={productsImageRoute} />
        </div>
        <div className="w-full flex justify-center mt-10">
          <button
            className=" bg-black text-white hover:bg-white hover:text-black shadow-xl font-medium text-lg px-8 py-4 flex items-center justify-center rounded-full gap-x-3 cursor-pointer"
            onClick={handleViewProducts}
          >
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;

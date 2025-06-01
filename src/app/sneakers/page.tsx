"use client";
import React from "react";
import Breadcrumbs from "../components/UI/Breakcrumbs/Breakcrumbs";
import Image from "next/image";
import ProductPrice from "../components/common/productPrice";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer/Footer";
import AdsNavBar from "../components/common/adsNavBar";
import ProductDiscount from "../components/common/productDiscount";

function Products() {
  const navigate = useRouter();

  const onProductClick = (id: string) => {
    navigate.push(`/sneakers/${id}`);
  };

  function ads() {
    return (
      <>
        <p>
          Special launch offer is valid till first 100 pairs only. Hurry Up!
        </p>
        <p>
          Special launch offer is valid till first 100 pairs only. Hurry Up!
        </p>
      </>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div onClick={() => navigate.push("/")} className="w-full h-16 bg-black flex gap-4 justify-center items-center">
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
      <div className="w-[80%] py-20">
        <Breadcrumbs />
        <div className="grid grid-rows-1 md:grid-cols-3 gap-4 mt-4">
          <div
            id="drift-solace"
            onClick={() => onProductClick("drift-solace")}
            className="w-auto h-[600px] relative"
          >
            <ProductDiscount discount="30" />
            <div className="w-full h-[75%] cursor-pointer relative">
              <Image src="/assets/1.png" alt="" fill={true} />
            </div>
            <div className="font-medium text-xl my-3 cursor-pointer">
              DRIFT Solace{" "}
            </div>
            <ProductPrice launchPrice="3499" mrp="4500" />
          </div>
          <div
            id="drift-forest"
            onClick={() => onProductClick("drift-forest")}
            className="w-auto h-[600px] relative"
          >
            <ProductDiscount discount="30" />
            <div className="w-full h-[75%] cursor-pointer relative">
              <Image src="/assets/2.png" alt="" fill={true} />
            </div>
            <div className="font-medium text-xl my-3 cursor-pointer">
              DRIFT Forest{" "}
            </div>
            <ProductPrice launchPrice="3499" mrp="4500" />
          </div>
          <div
            id="drift-snow"
            onClick={() => onProductClick("drift-snow")}
            className="w-auto h-[600px] relative"
          >
            <ProductDiscount discount="30" />
            <div className="w-full h-[75%] cursor-pointer relative">
              <Image src="/assets/3.png" alt="" fill={true} />
            </div>
            <div className="font-medium text-xl my-3 cursor-pointer">
              DRIFT Snow{" "}
            </div>
            <ProductPrice launchPrice="3499" mrp="4500" />
          </div>
          <div
            id="drift-dark-shoes"
            onClick={() => onProductClick("drift-dark-shoes")}
            className="w-auto h-[600px] relative"
          >
            <ProductDiscount discount="30" />
            <div className="w-full h-[75%] cursor-pointer relative">
              <Image src="/assets/4.png" alt="" fill={true} />
            </div>
            <div className="font-medium text-xl my-3 cursor-pointer">
              DRIFT Dark Shoes{" "}
            </div>
            <ProductPrice launchPrice="3499" mrp="4500" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;

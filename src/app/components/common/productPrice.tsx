import { RupeeIcon } from "@/app/Theme/Icons/Icons";
import React from "react";

interface ProductPriceProps {
  launchPrice?: string;
  mrp: string;
}

const ProductPrice = ({ launchPrice, mrp }: ProductPriceProps) => {
  return (
    <div className="flex flex-col space-x-0.5 font-medium">
      {launchPrice && (
        <div className="flex gap-x-2">
          <span className="text-lg text-red-600">Special Launch Offer : </span>
          <span className="flex">
            <RupeeIcon fill="#e7000b" width="16px" height="25px" />
            <span className="text-lg text-red-600">{launchPrice}</span>
          </span>
        </div>
      )}

      <div className="flex gap-x-2 text-gray-400">
        <span className="text-base pt-[1px]">MRP : </span>
        <span className="flex line-through">
          <RupeeIcon fill="#99a1af" width="14px" height="23px" />
          <span className=" text-base pt-[1px]">{mrp}</span>
        </span>
      </div>
    </div>
  );
};

export default ProductPrice;

import React from "react";

interface ProductDiscountProps{
    discount : string
}
const ProductDiscount = ({discount}: ProductDiscountProps) => {
  return (
    <div className="absolute top-4 left-4 z-10 px-2 pt-1 w-auto rounded-full flex items-center h-[32px] bg-white text-red-600 font-medium">
      {`${discount}% off`}
    </div>
  );
};

export default ProductDiscount;

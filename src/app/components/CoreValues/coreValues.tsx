import { coreValuesConst } from "@/app/constants/constant";
import {
  CommunityMindestIcon,
  CustomerFirstIcon,
  TrustIcon,
} from "@/app/Theme/Icons/Icons";
import React from "react";

const CoreValues = () => {
  return (
    <div className="w-full h-[700px] bg-[#F2F1ED]  flex justify-center items-center">
      <div className="w-[90%] h-[80%]  flex flex-col justify-between mb-10">
        <p className=" text-7xl font-bold tracking-wide"> Core Values</p>
        <div className="w-full flex gap-x-4">
          {coreValuesConst?.map((item) => (
            <div
              key={item.id}
              className="w-1/3 h-[400px]  rounded-2xl bg-white flex flex-col justify-center items-center px-10 shadow-xl"
            >
              <div className="flex flex-col justify-center items-center gap-y-10">
                {item.icon}
                <div className="flex flex-col justify-center items-center gap-y-5 px-10">
                  <p className="text-3xl font-bold"> {item.title}</p>
                  <p className="text-base font-extrabold text-[#4B4B4B] tracking-normal text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;

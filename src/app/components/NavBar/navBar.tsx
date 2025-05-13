import Button from "@/app/Theme/UI/Button";
import Image from "next/image";
import React from "react";

const navBaritems = [
  { key: "home", value: "Home" },
  { key: "about", value: "About" },
  { key: "newDrops", value: "New Drops" },
];
function NavBar() {
  return (
    <div className="w-full h-[72px] flex relative items-center  md:px-16 md:justify-around ">
      <div className="w-[100px] h-full relative ">
        <Image src="/assets/BrandLogo.jpeg" fill={true} alt="brand-logo" />
      </div>
      <div className="w-[180px] h-[70px] relative ml-[38px] ">
      <Image src="/assets/brandNameImage.png" fill={true} alt="brand-name-logo" />

      </div>
      <div className=" items-center space-x-20 hidden md:flex ">
        {navBaritems?.map((item) => (
          <div key={item?.key}>{item?.value}</div>
        ))}
      </div>

      {/* Temporarily commented the button */}
      {/* <div className="flex items-center">
        <button
          type="button"
          className="bg-white text-black md:px-10 md:py-[15px] font-semibold text-sm px-6 py-2 font-roboto flex justify-center items-center"
        >
          SHOP
        </button>
      </div> */}
    </div>
  );
}

export default NavBar;

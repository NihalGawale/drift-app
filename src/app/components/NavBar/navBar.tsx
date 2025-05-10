import Button from "@/app/Theme/UI/Button";
import React from "react";

const navBaritems = [
  { key: "home", value: "Home" },
  { key: "account", value: "Account" },
  { key: "newDrops", value: "New Drops" },
];
function NavBar() {
  return (
    <div className="w-full h-[72px] flex items-center px-5 md:px-16 md:justify-around justify-between">
      <div>LOGO</div>
      <div className=" items-center space-x-20 hidden md:flex ">
        {navBaritems?.map((item) => (
          <div key={item?.key}>{item?.value}</div>
        ))}
      </div>
      <div className="flex items-center">
        <Button buttonText="SHOP" bgColour="white"  />
      </div>
    </div>
  );
}

export default NavBar;

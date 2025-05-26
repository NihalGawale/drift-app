"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "../UI/Button/Button";
import SignUpButton from "../UI/Button/SignUpButton";
import { navBarItems, signInButtons } from "@/app/constants/constant";
import { animateScroll as scroll } from "react-scroll";

function NavBar() {
  const [navLink, setNavLink] = useState(navBarItems);

  const handleOnClickNavLink = (navLinkId: string | undefined) => {
    const updatedNavLinks = navLink.map((item) => ({
      ...item,
      isClicked: item.id === navLinkId, // set true only for clicked item
    }));
    setNavLink(updatedNavLinks);
  };

  return (
    <div className="w-full flex justify-center z-50 top-1 fixed ">
      <div className="w-[90%] h-20 mt-6 bg-[#F2F1EDB8] backdrop-blur-[5px] shadow-[1px_4px_12px_0px_rgba(0,0,0,0.16)] rounded-full flex justify-between items-center px-12 py-3">
        <div
          onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
        >
          Brand logo and Name
        </div>
        <div className="w-[60%] 2xl:w-[40%] h-10 flex items-center justify-center gap-x-6 xl:gap-x-12">
          {navLink?.map((item) => (
            <div key={item.id} className="w-[16%] ">
              <Button
                id={item?.id}
                buttonText={item?.value}
                isClicked={item.isClicked}
                offset={item?.offset}
                handleOnClickNavLink={handleOnClickNavLink}
              />
            </div>
          ))}
        </div>
        <div className="w-[10%] h-10 flex items-center justify-between">
          {signInButtons?.map((item) => (
            <div key={item.id}>
              <SignUpButton
                id={item?.id}
                buttonText={item?.value}
                isRing={item?.isRing}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;

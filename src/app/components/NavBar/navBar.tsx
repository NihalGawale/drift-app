"use client";

import React, { useState } from "react";
import Button from "../UI/Button/Button";
import SignUpButton from "../UI/Button/SignUpButton";
import { navBarItems, signInButtons } from "@/app/constants/constant";
import { animateScroll as scroll } from "react-scroll";
import { useRouter } from "next/navigation";

function NavBar() {
  const [navLink, setNavLink] = useState(navBarItems);
  const navigate = useRouter();
  const handleOnClickNavLink = (navLinkId: string | undefined) => {
    const updatedNavLinks = navLink.map((item) => ({
      ...item,
      isClicked: item.id === navLinkId, // set true only for clicked item
    }));
    setNavLink(updatedNavLinks);

    if (navLinkId === "products") {
      navigate.push("/products");
    }
    console.log(navLinkId, "nav link id");
  };

  return (
    <div className="w-full flex justify-center z-50 top-1 fixed font-bold">
      <div className="w-[80%] h-20 mt-6 bg-[#F2F1EDB8] backdrop-blur-[5px] shadow-[1px_4px_12px_0px_rgba(0,0,0,0.16)] rounded-full flex justify-between items-center px-12 py-3 text-lg">
        <div
          onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
        >
          Brand logo and Name
        </div>
        <div className="w-[60%] h-10 flex items-center justify-center gap-x-6">
          {navLink?.map((item) => (
            <div key={item.id} className="w-auto flex justify-center ">
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
        <div className="w-auto h-10 flex items-center gap-x-4 justify-end">
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

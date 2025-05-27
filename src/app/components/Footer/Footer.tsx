import { contactLeftConstants, navBarItems } from "@/app/constants/constant";
import {
  FacebookIcon,
  InstagramIcon,
  TermsPolicyDot,
  TwitterIcon,
} from "@/app/Theme/Icons/Icons";
import Image from "next/image";
import React from "react";

const footerConstantsOne = [
  { key: "rights", value: "© 2025 Drift. All rights reserved." },
  { key: "privacyPolicy", value: "Privacy Policy" },
  { key: "terms", value: "Terms of Service" },
  { key: "cookies", value: "Cookies Settings" },
];

const rightsReserved = "Copyright 2025 © Drift, All Rights Reserved";
function Footer() {
  return (
    <div className="w-full h-[460px] bg-black flex justify-center items-center text-white">
      <div className="w-[80%] h-[80%] ">
        <div className="h-[80%] flex border-b-1 border-[#434343]">
          <div className="w-1/3 h-full flex">
            <div className="w-[80px] h-[60px] relative">
              <Image
                src="/assets/BrandLogo.jpeg"
                alt="drift-brand-image"
                fill={true}
              />
            </div>
          </div>
          <div className="w-1/3 h-full">
            <div className="flex flex-col gap-y-8 max-w-[70%] text-base font-semibold tracking-wide">
              {contactLeftConstants.map((item) => (
                <div key={item.key} className="flex gap-x-4">
                  <div>{item.icon}</div>
                  <div>{item.contact}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/3 h-full text-xl flex flex-col gap-y-10 items-center font-extrabold">
            {navBarItems.map((item) => (
              <div key={item.id}>{item.value}</div>
            ))}
          </div>
        </div>
        <div className="w-full h-[20%] flex items-center font-semibold tracking-wide">
          <div className="w-1/3">{rightsReserved}</div>
          <div className="w-1/3 flex gap-x-10 justify-center">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
          <div className="w-1/3 flex items-center justify-end gap-x-2 font-semibold tracking-wide">
            Terms & Conditions <TermsPolicyDot /> Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

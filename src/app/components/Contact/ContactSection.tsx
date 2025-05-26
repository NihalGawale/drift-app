"use client";

import {
  contactLeftConstants,
  contactRightConstants,
} from "@/app/constants/constant";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/app/Theme/Icons/Icons";
import Button from "@/app/Theme/UI/Button";
import React from "react";
import { Element } from "react-scroll";

function ContactSection() {
  return (
    <Element
      name="contact-us"
      className="w-full h-[900px] relative flex justify-center "
    >
      <div className="w-full h-full">
        <video
          src="/videos/contactSection.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="w-[70%] h-[564px]  z-30 absolute mt-30 flex justify-between ">
        <p className="text-7xl">Contact Us</p>
        <div className="w-[800px] h-full flex opacity-100 text-white">
          <div className="w-[350px] h-full flex justify-center pt-10 bg-[#000000B8] rounded-l-lg">
            <div className="w-[80%] h-[70%] flex flex-col gap-y-20">
              <div className="flex flex-col gap-y-9">
                <p className="font-bold">Contact Information</p>
                <div className="flex flex-col gap-y-9">
                  {contactLeftConstants.map((item) => (
                    <div key={item.key} className="flex gap-x-4">
                      <div>{item.icon}</div>
                      <div>{item.contact}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-x-4">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
              </div>
            </div>
          </div>
          <div className="w-[450px] h-full bg-[#FFFFFFCC] opacity-80 rounded-r-lg flex justify-center pt-10 text-black">
            <div className="w-[80%] h-[70%] flex flex-col gap-y-8">
              <p className="font-bold">Send Us a Message</p>
              <div className="flex gap-x-6">
                <input
                  className="border-1 py-2.5 px-4 w-1/2 rounded-full"
                  placeholder="First Name"
                />
                <input
                  className="border-1 py-2.5 px-4 w-1/2 rounded-full"
                  placeholder="Last  Name"
                />
              </div>
              {contactRightConstants.map((item) => (
                <div key={item.key} className="w-full relative">
                  {item?.icon && (
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      {item.icon}
                    </span>
                  )}

                  <input
                    className={` ${
                      item.key === "message" ? "pb-20 rounded-xl" : ""
                    } border-1 py-2.5 px-10 w-full rounded-full`}
                    placeholder={item.value}
                  />
                </div>
              ))}
              <Button
                buttonText="Send Message"
                bgColour="black"
                showArrow={false}
                showOutline={false}
              />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default ContactSection;

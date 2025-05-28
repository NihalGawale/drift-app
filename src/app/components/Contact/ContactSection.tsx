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
import {
  ContactFormErrorProps,
  UserMessageProps,
} from "@/app/Types/ContactTypes";
import { validateContactForm } from "@/app/utils/helper";
import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";

const userMessageConst = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  message: "",
};

function ContactSection() {
  const [userMessage, setUserMessage] =
    useState<UserMessageProps>(userMessageConst);
  const [isDisabled, setIsDisabled] = useState(true);
  const [formErrors, setFormErrors] =
    useState<ContactFormErrorProps>(userMessageConst);

  useEffect(() => {
    if (userMessage?.firstName === "" || userMessage?.lastName === "") {
      setIsDisabled(true);
    }

    const isAnyRequiredFieldEmpty = contactRightConstants.some((item) => {
      return item.isRequired && userMessage[item.key] === "";
    });

    if (isAnyRequiredFieldEmpty) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [userMessage]);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string,
  ) => {
    let value = e.target.value;

    if (key === "phoneNumber") {
      // Ensure it always starts with +91
      if (!value.startsWith("+91")) {
        value = "+91" + value.replace(/\D/g, "");
      } else {
        // remove non-digits after +91
        value = "+91" + value.slice(3).replace(/\D/g, "").slice(0, 10);
      }
    }

    setUserMessage((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleOnSubmit = () => {
    const errors = validateContactForm(userMessage);
    setFormErrors(errors);
  };

  return (
    <Element
      name="contact-us"
      className="w-full h-[900px] relative flex justify-center items-center "
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
      <div className="w-[80%] h-auto z-30 absolute flex justify-between ">
        <p className="text-7xl font-black ">Contact Us</p>
        <div className="w-[800px] h-auto flex opacity-100 text-white">
          <div className="w-[350px] h-full flex justify-center pt-10 bg-[#000000B8] rounded-l-lg">
            <div className="w-[80%] h-[70%] flex flex-col gap-y-20">
              <div className="flex flex-col gap-y-9">
                <p className="font-semibold text-lg">Contact Information</p>
                <div className="flex flex-col gap-y-9">
                  {contactLeftConstants.map((item) => (
                    <div key={item.key} className="flex text-base gap-x-2 font-semibold tracking-normal">
                      <div>{item.icon}</div>
                      <div className="-mt-0.5">{item.contact}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-x-6">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
              </div>
            </div>
          </div>
          <div className="w-[450px] h-full bg-[#FFFFFFCC] opacity-80 rounded-r-lg flex justify-center py-10 text-black">
            <div className="w-[80%] h-auto flex flex-col gap-y-8">
              <p className="font-semibold text-lg">Send Us a Message</p>
              <div className="flex flex-col gap-y-2">
                <div className="flex gap-x-6">
                  <input
                    key="firstName"
                    required={true}
                    className="border-1 py-2.5 px-4 w-1/2 rounded-lg font-semibold text-base"
                    placeholder="First Name*"
                    onChange={(e) => handleOnChange(e, "firstName")}
                  />
                  <input
                    key="lastName"
                    required={true}
                    className="border-1 py-2.5 px-4 w-1/2 rounded-lg font-semibold text-base"
                    placeholder="Last Name*"
                    onChange={(e) => handleOnChange(e, "lastName")}
                  />
                </div>
                {(formErrors["firstName"] && (
                  <p className="text-red-600 text-base font-medium">
                    {formErrors["firstName"]}
                  </p>
                )) ||
                  (formErrors["lastName"] && (
                    <p className="text-red-600 text-base font-medium">
                      {formErrors["lastName"]}
                    </p>
                  ))}
              </div>
              {contactRightConstants.map((item) => (
                <>
                  <div key={item.key} className="w-full relative">
                    <>
                      {item?.icon && (
                        <span
                          className={`absolute left-3 ${
                            formErrors[item.key] === ""
                              ? "top-[40%]"
                              : "top-[30%]"
                          }  transform -translate-y-1/2 text-gray-500`}
                        >
                          {item.icon}
                        </span>
                      )}
                      <input
                        className={` ${
                          item.key === "message" ? "pb-20 rounded-lg" : ""
                        } border-1 py-2.5 px-10 w-full rounded-lg font-semibold text-base mb-2`}
                        placeholder={item.value}
                        required={item.isRequired}
                        value={userMessage[item.key]}
                        onChange={(e) => handleOnChange(e, item.key)}
                      />
                    </>
                    {formErrors[item.key] && (
                      <p className="text-red-600 text-sm font-medium">
                        {formErrors[item.key]}
                      </p>
                    )}
                  </div>
                </>
              ))}
              <Button
                buttonText="Send Message"
                bgColour="black"
                showArrow={false}
                showOutline={false}
                isDisabled={isDisabled}
                handleOnSubmit={handleOnSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default ContactSection;

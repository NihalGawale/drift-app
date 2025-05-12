import EmailIcon from "@/app/Theme/Icons/EmailIcon";
import LocationIcon from "@/app/Theme/Icons/LocationIcon";
import PhoneIcon from "@/app/Theme/Icons/PhoneIcon";
import { Themes } from "@/app/Theme/Theme";
import React from "react";

const contactConstants = [
  {
    key: "email",
    icon: <EmailIcon />,
    title: "Email",
    description: "Reach us anytime for inquiries or support.",
    contact: "teamdriftwear@gmail.com",
  },
  {
    key: "phone",
    icon: <PhoneIcon />,
    title: "Phone",
    description: "Call us for immediate assistance or questions.",
    contact: "+91 7219591231",
  },
  {
    key: "location",
    icon: <LocationIcon />,
    title: "Office",
    description: "Visit us at our headquarters for personalized service.",
    contact: "Nagpur, Maharashta, India",
  },
];

function ContactSection() {
  return (
    <div
      className=" w-full h-[1100px] md:h-[864px] flex justify-center items-center"
      style={{ backgroundColor: Themes.sectionGrayColour }}
    >
      <div className="w-full h-full px-5 py-16 md:px-16 md:py-28 flex flex-col items-center gap-y-20">
        <div className="w-full h-[123px] md:w-[768px] md:h-[149px] flex flex-col items-center gap-y-4">
          <p>Connect</p>
          <div className="flex flex-col gap-y-6 items-center">
            <p className="text-5xl font-extrabold"> Get in Touch</p>
            <p>We'd love to hear from you!</p>
          </div>
        </div>

        <div className="w-full h-[666px] md:w-[1312px] md:h-[202px] flex flex-col md:flex-row gap-y-20 md:gap-x-12">
          {contactConstants.map((item) => (
            <div
              key={item.key}
              className="w-full h-auto md:w-[405px] md:h-full flex flex-col items-center gap-y-6"
            >
              <div>{item?.icon}</div>
              <div className="flex flex-col items-center gap-y-4 text-center">
                <p className="text-2xl md:text-4xl font-extrabold">
                  {item?.title}
                </p>
                <p className="font-normal tracking-wide">{item?.description}</p>
                <p className="text-[16px] font-normal tracking-wide">{item?.contact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactSection;

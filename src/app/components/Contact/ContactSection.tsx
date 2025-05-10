import EmailIcon from "@/app/Theme/Icons/EmailIcon";
import LocationIcon from "@/app/Theme/Icons/LocationIcon";
import PhoneIcon from "@/app/Theme/Icons/PhoneIcon";
import { Themes } from "@/app/Theme/Theme";
import React from "react";

const contactConstants = [
  {
    icon: <EmailIcon />,
    title: "Email",
    description: "Reach us anytime for inquiries or support.",
    contact: "teamdriftwear@gmail.com",
  },
  {
    icon: <PhoneIcon />,
    title: "Phone",
    description: "Call us for immediate assistance or questions.",
    contact: "+91 7219591231",
  },
  {
    icon: <LocationIcon />,
    title: "Office",
    description: "Visit us at our headquarters for personalized service.",
    contact: "Nagpur, Maharashta, India",
  },
];

function ContactSection() {
  return (
    <div
      className="w-full h-[864px] flex justify-center items-center"
      style={{ backgroundColor: Themes.sectionGrayColour }}
    >
      <div className="px-16 py-28 flex flex-col items-center gap-y-20">
        <div className="w-[768px] h-[149px] flex flex-col items-center gap-y-4">
          <p>Connect</p>
          <div className="flex flex-col gap-y-6 items-center">
            <p className="text-5xl font-extrabold"> Get in Touch</p>
            <p>We'd love to hear from you!</p>
          </div>
        </div>

        <div className="w-[1312px] h-[202px] flex gap-x-12">
          {contactConstants.map((item) => (
            <div className="w-[405px] h-full flex flex-col items-center gap-y-6">
              <div>{item?.icon}</div>
              <div className="flex flex-col items-center gap-y-4">
                <p className="text-4xl font-extrabold">{item?.title}</p>
                <p>{item?.description}</p>
                <p>{item?.contact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactSection;

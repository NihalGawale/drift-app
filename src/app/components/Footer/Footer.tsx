import React from "react";

const footerConstantsOne = [
  { key: "rights", value: "© 2025 Drift. All rights reserved." },
  { key: "privacyPolicy", value: "Privacy Policy" },
  { key: "terms", value: "Terms of Service" },
  { key: "cookies", value: "Cookies Settings" },
];

function Footer() {
  return (
    <div className="px-5 py-16 md:px-16 md:py-20">
      <div className="w-full h-[357px] md:h-[36px] flex flex-col md:flex-row md:justify-end gap-y-16 md:gap-0">
        <div className=" flex justify-center">
          <p>LOGO</p>
        </div>
        <div className=" w-full flex flex-col md:flex-row justify-center items-center gap-y-10 md:gap-x-6">
          {footerConstantsOne.map((item) => (
            <div key={item.key}>{item.value}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;

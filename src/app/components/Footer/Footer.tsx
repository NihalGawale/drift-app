import React from "react";

const footerConstantsOne = [
  { key: "rights", value: "© 2025 Drift. All rights reserved." },
  { key: "privacyPolicy", value: "Privacy Policy" },
  { key: "terms", value: "Terms of Service" },
  { key: "cookies", value: "Cookies Settings" },
];

function Footer() {
  return (
    <div className="px-16 py-20">
        <div className="w-full h-[36px] flex justify-end">
          <div>LOGO</div>
          <div className=" w-full flex justify-center gap-x-6">
            {footerConstantsOne.map((item) => (
              <div key={item.key}>{item.value}</div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default Footer;

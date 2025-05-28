import React from "react";

function SectionLayout({ children }: any) {
  return (
    <div className="w-full h-full  md:h-full flex justify-center items-center bg-[#E6E4DC]">
      <div className="w-[335px] h-full md:w-full md:h-[640px] flex flex-col justify-center md:items-center md:flex-row">
        {children}
      </div>
    </div>
  );
}

export default SectionLayout;

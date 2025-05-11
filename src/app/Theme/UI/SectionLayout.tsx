import React from "react";

function SectionLayout({ children }: any) {
  return (
    <div className="w-full h-[1000px]  md:h-[864px] flex justify-center items-center">
      <div className="w-[335px] h-[891px] md:w-[70%] md:h-[640px] flex flex-col justify-center md:items-center md:flex-row gap-y-12 md:gap-x-20">
        {children}
      </div>
    </div>
  );
}

export default SectionLayout;

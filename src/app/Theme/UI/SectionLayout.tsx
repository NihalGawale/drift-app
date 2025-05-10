import React from "react";

function SectionLayout({ children }: any) {
  return (
    <div className="w-full h-[864px] flex justify-center items-center">
      <div className="w-[70%] h-[640px] flex gap-x-20">{children}</div>
    </div>
  );
}

export default SectionLayout;

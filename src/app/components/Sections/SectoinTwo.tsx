"use client";

import React, { useEffect, useState } from "react";
import { Themes } from "@/app/Theme/Theme";

function SectoinTwo() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }

    updateWidth(); // Set width initially
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const breakpoint = 768;

  // ✅ Only render layout *after* width is set (i.e. on client)
  if (width === null) return null;
  return (
    <div
      className="w-full h-[264px] md:h-[368px] flex justify-center items-center"
      style={{ backgroundColor: Themes.sectionGrayColour }}
    >
      <div className="w-full md:w-[60%] md:h-[144px] flex justify-center">
        <p className="w-[85%] h-auto md:w-full md:h-full text-[30px] md:text-5xl font-extrabold text-center md:p-0">
          {width > breakpoint ? (
            <>
              "Discover the vibrant colours of our <br /> sneakers—find the
              perfect pair to <br /> express your style!"
            </>
          ) : (
            <>
              "Discover the vibrant colours of our sneakers—find the perfect pair
              to express your style!"
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default SectoinTwo;

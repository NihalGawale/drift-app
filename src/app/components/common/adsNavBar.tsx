import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
const AdsNavBar = ({ children }: any) => {
  const [ref] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div className="w-full overflow-hidden h-12 border-b border-gray-200 shadow-xl text-[#4B4B4B] flex justify-center items-center">
      <motion.div
        ref={ref}
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
        className="w-full font-semibold text-2xl tracking-wide flex justify-between"
      >
        {children}
      
      </motion.div>
    </div>
  );
};

export default AdsNavBar;

import React from "react";

const SneakersPage = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[70%] h-[900px] flex items-end">
        <div className="w-full h-[90%] bg-yellow-300 flex">
          <div className="w-[60%] h-full bg-red-300">image</div>
          <div className="w-[40%] h-full bg-green-300">Description</div>
        </div>
      </div>
    </div>
  );
};

export default SneakersPage;

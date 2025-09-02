import React from "react";
import { assets } from "../assets/assets";

const GenerateButton = () => {
  return (
    <div className="pb-16 text-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16">
        See the Magic. Try Now
      </h1>
      <button className="inline-flex  text-white font-bold p-4 px-5 rounded-full bg-gradient-to-r from-purple-700 to-pink-700  items-center gap-3 hover:scale-105 transition-transform">
        {" "}
        Generate Images
        <img src={assets.star_group} className="h-6" />
      </button>
    </div>
  );
};

export default GenerateButton;

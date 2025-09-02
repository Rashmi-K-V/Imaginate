import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center my-20">
      <div className="text-stone-500 inline-flex items-center bg-white gap-2 px-6 py-1 rounded-full border border-neutral-500">
        <p>Your vision, our canvas.</p>
        <img src={assets.star_icon} />
      </div>
      <h1 className="text-4xl  max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center">
        From text to <span className="text-blue-600">image</span>, in just
        seconds
      </h1>

      <p className="text-center max-w-xl mx-auto mt-5">
        Write what you imagine and watch it transform into realistic, creative
        visuals instantly
      </p>
      <button className="sm:text-lg text-white font-bold bg-gradient-to-bl from-indigo-700 to-sky-800 w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full">
        Generate Images <img src={assets.star_group} className="h-6" />
      </button>

      <div className="flex flex-wrap justify-center items-center gap-3 mt-10">
        {Array(6)
          .fill("")
          .map((item, index) => (
            <img
              className="rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              key={index}
              width={70}
            />
          ))}
      </div>
      <p className="text-neutral-600 mt-2">Generated Images from Imaginate</p>
    </div>
  );
};

export default Header;

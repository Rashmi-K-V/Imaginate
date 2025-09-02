import React, { useState } from "react";
import { assets } from "../assets/assets";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);

  const [isImageLoading, setIsImageLoading] = useState(false);

  const [loading, setLoading] = useState(false);

  return (
    <form className="flex flex-col min-h-[90vh] items-center justify-center gap-8 mt-3">
      <div>
        <div className="relative">
          <img src={image} className="max-w-sm rounded" />
          <span className="absolute bottom-0 left-0 h-1 bg-blue-500 w-full transition-all duration-[10]" />
        </div>
        <p>Loading...</p>
      </div>
      {!isImageLoading ? (
        <div className="flex w-full max-w-xl bg-zinc-500 text-white p-0.5 rounded-full font-semibold">
          <input
            type="text"
            placeholder="Describe what you want to generate"
            id=""
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 text-white font-semibold"
          />
          <button
            type="submit"
            className="bg-gradient-to-l from-neutral-800 to bg-zinc-800 px-8 sm:px-12 py-3 rounded-full text-white font-bold ml-4 hover:scale-105 transition-transform duration-200"
          >
            Generate
          </button>
        </div>
      ) : (
        <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
          <p className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer">
            Generate Another
          </p>
          <a
            href={image}
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
            download
          >
            Download
          </a>
        </div>
      )}
    </form>
  );
};

export default Result;

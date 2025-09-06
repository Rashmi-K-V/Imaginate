import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-6 md:px-28 my-24"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-3 text-zinc-900">
        Create AI-Powered Images
      </h1>
      <p className="text-gray-500 mb-10 ">
        Your ideas, transformed into art by AI.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-14">
        <img
          src={assets.sample_img_2}
          className="w-80 xl:w-90 rounded-xl mt-2"
        />
        <div className="max-w-lg">
          <h2
            className="text-3xl font-medium
          max-w-lg  mb-4"
          >
            Introducing AI-Powered Text to Image Generator
          </h2>

          <p className="text-gray-600  mb-5">
            This tool is designed to generate images from simple text input. You
            just need to type a description of what you want, and the AI will
            produce a visual that matches your words. It can handle basic
            prompts as well as more detailed instructions, giving you
            flexibility in how you create.
          </p>
          <p className="text-gray-600 ">
            {" "}
            The process is quick, requiring no special design knowledge or
            technical skills. Everything is generated instantly, saving both
            time and effort. It can be used for personal projects, creative
            exploration, or professional tasks. With just a few words, you can
            transform ideas into clear, ready-to-use visuals.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;

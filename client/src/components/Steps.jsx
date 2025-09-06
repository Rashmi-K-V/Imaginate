import React from "react";
import { stepsData } from "../assets/assets";
import { motion } from "framer-motion";

const Steps = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col justify-center items-center mb-10  m-32 px-4"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-zinc-900">
        How it Works
      </h1>
      <p className="text-lg text-gray-500 mb-8">When text becomes art</p>

      <div className="space-y-4 w-full max-w-3xl text-sm">
        {stepsData.map((item, index) => (
          <div
            className="flex items-center gap-4 p-5 px-8 bg-white/20 shadow-lg border border-gray-300  cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg"
            key={index}
          >
            <img src={item.icon} width={40} />
            <h2 className="text-xl font-medium">{item.title}</h2>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;

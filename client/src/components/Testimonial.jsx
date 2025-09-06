import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-12 my-20"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-3 text-zinc-900">
        Testimonials
      </h1>
      <p className="text-gray-500 mb-12 ">What our users are saying</p>

      <div className="flex flex-wrap  gap-6">
        {testimonialsData.map((testimonial, index) => (
          <div
            className="order bg-white/20 border-gray-100 shadow-xl rounded-2xl p-10 w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all duration-300 flex flex-col items-center"
            key={index}
          >
            <div className="flex " />
            <img src={testimonial.image} className="rounded-full w-16 " />
            <h2 className="text-xl font-semibold mt-3">{testimonial.name}</h2>
            <p className="text-gray-500 mb-4">{testimonial.role}</p>
            <div className="flex mb-4">
              {Array(testimonial.stars)
                .fill()
                .map((item, index) => (
                  <img key={index} src={assets.rating_star} />
                ))}
            </div>
            <p className="text-center text-md text-gray-600 p-1">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonial;

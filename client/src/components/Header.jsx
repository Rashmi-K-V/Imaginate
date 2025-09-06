import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      //open login form
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center text-center my-20"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-stone-500 inline-flex items-center bg-sky-50 gap-2 px-6 py-1 rounded-full border border-neutral-400  "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p>Your vision, our canvas.</p>
        <img src={assets.star_icon} />
      </motion.div>

      <motion.h1
        className="text-4xl  max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center  leading-tight font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        From text to{" "}
        <span className="bg-gradient-to-l from-rose-600 to-indigo-700 bg-clip-text text-transparent font-semibold">
          image
        </span>
        , in just seconds
      </motion.h1>

      <motion.p
        className="text-center max-w-xl mx-auto mt-5 text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Write what you imagine and watch it transform into realistic, creative
        visuals instantly
      </motion.p>
      <motion.button
        className="sm:text-lg text-white font-bold bg-gradient-to-bl from-indigo-700 to-sky-800 w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full"
        initial={{ opacity: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { delay: 0.8, duration: 1 },
        }}
        onClick={onClickHandler}
      >
        Generate Images <img src={assets.star_group} className="h-6" />
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex flex-wrap justify-center items-center gap-3 mt-10"
      >
        {Array(6)
          .fill("")
          .map((item, index) => (
            <motion.img
              whileHover={{ scale: 1.05, duration: 0.1 }}
              className="rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              key={index}
              width={70}
            />
          ))}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="text-neutral-600 mt-2"
      >
        Generated Images from Imaginate
      </motion.p>
    </motion.div>
  );
};

export default Header;

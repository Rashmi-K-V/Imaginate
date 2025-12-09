import React, { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const BuyCredit = () => {
  const { user, backendURL, loadCreditsData, token, setShowLogin } =
    useContext(AppContext);

  const navigate = useNavigate();

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: order.amount, //  Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits Purchase",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // function to display razorpay payment gateway
  const paymentRazorpay = async (planId) => {
    try {
      console.log("USER:", user);

      if (!user) {
        setShowLogin(true);
      }

      //api call for payment endpoint
      const { data } = await axios.post(
        backendURL + "/api/user/pay-razor",
        {
          planId: planId,
          userId: user._id,
        },
        {
          headers: { token },
        }
      );
      console.log(data);
      console.log("DATA:", planId);
      if (data.success) {
        //initialize razorpay payment gateway
        initPay(data.order);
      }
    } catch (error) {
      console.log("Razorpay Error:", error);
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-[80vh] text-center pt-14 mb-10"
    >
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6 bg-blue-100 text-blue-600 hover:bg-blue-200 transition">
        Our Plans
      </button>
      <h1 className="text-center text-4xl font-medium mb-6 sm:mb-10">
        Choose the Plan
      </h1>
      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => (
          <div
            className="bg-white drop-shadow-lg border border-white rounded-2xl py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-200 shadow-2xl "
            key={index}
          >
            <img width={40} src={assets.logo_icon} alt="" />
            <p className="mt-3 mb-1 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium">${item.price}</span> /{" "}
              {item.credits} credits
            </p>
            <button
              onClick={() => paymentRazorpay(item.id)}
              className="w-full bg-gray-600 text-white mt-8 text-md rounded-xl py-2.5 min-w-48 hover:bg-gray-700 transition"
            >
              {user ? "Purchase Now" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;

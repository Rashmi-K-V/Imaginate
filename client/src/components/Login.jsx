import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Login = () => {
  //State to manage switching between sign and sign up page

  const [state, setState] = useState("Login");

  const { setShowLogin } = useContext(AppContext);

  useEffect(() => {
    //Disable scrolling when login component is mounted
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset"; //Enable scrolling when component is unmounted
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-lg z-10 bg-black/30 flex justify-center items-center">
      <form className="relative bg-white p-10 rounded-2xl text-slate-500">
        <h1 className="text-center text-3xl text-neutral-700 font-semibold">
          {state}
        </h1>
        <p className="text-sm mt-3">
          Welcome Back! Please Sign-in to Contiunue
        </p>

        {state !== "Login" && (
          <div className="border border-neutral-300 px-6  py-2 flex items-center gap-4 rounded-xl mt-4">
            <img src={assets.profile_icon} width={20} alt="" />
            <input
              className="outline-none text-md"
              type="text"
              placeholder="Full Name"
              id=""
              required
            />
          </div>
        )}

        <div className="border border-neutral-300 px-6  py-2 flex items-center gap-4 rounded-xl mt-4">
          <img src={assets.email_icon} alt="" />
          <input
            className="outline-none text-md"
            type="email"
            placeholder="Email Id"
            id=""
            required
          />
        </div>

        <div className="border border-neutral-300 px-6 py-2 flex items-center gap-4 rounded-xl mt-4">
          <img src={assets.lock_icon} alt="" />
          <input
            className="outline-none text-md"
            type="password"
            placeholder="Password"
            id=""
            required
          />
        </div>
        <p className="text-sm text-blue-600 my-4 cursor-pointer">
          Forgot password?
        </p>
        <button className="bg-gradient-to-l from-sky-600 to-blue-600  w-full text-white font-bold py-2 rounded-full ">
          {state === "Login" ? "Login" : "Create Account"}
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              Sign Up
            </span>{" "}
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>{" "}
          </p>
        )}
        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          className="absolute top-5 right-5 cursor-pointer"
          alt=""
        />
      </form>
    </div>
  );
};

export default Login;

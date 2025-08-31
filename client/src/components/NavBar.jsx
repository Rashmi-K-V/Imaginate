import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [user, setUser] = useState(true); // null means logged out
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-28 sm:w-32 lg:w-40 " />
      </Link>

      <div>
        {user ? (
          //For logged in user
          <div>
            <button>
              <img className="w-5" src={assets.credit_star} />
              <p>Credit Left : 50</p>
            </button>
            <p>Hi, UserName</p>
            <div className="relative group">
              <img src={assets.profile_icon} className="w-10 drop-shadow " />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded-xl pt-12">
                <ul>
                  <li>Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          //For Logged-out user
          <div className="flex items-center gap-2 sm:gap-5 text-lg ">
            <p
              className="cursor-pointer border-2 border-zinc-500 px-4 sm:px-7 py-2 rounded-full"
              onClick={() => navigate("/buy")}
            >
              Pricing
            </p>
            <button className="bg-zinc-700 text-white px-7 py-2 sm:px-10 rounded-full hover:bg-zinc-300 transition duration-200">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

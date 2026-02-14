import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt=""
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <li>
          <NavLink to="/" end>
            {({ isActive }) => (
              <div className="flex flex-col items-center py-1">
                Home
                {isActive && (
                  <div className="h-0.5 w-3/5 bg-primary mt-1"></div>
                )}
              </div>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/doctors">
            {({ isActive }) => (
              <div className="flex flex-col items-center py-1">
                All doctors
                <div
                  className={`h-0.5 w-3/5 mt-1 bg-primary ${isActive ? "opacity-100" : "opacity-0"}`}
                />
              </div>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/about">
            {({ isActive }) => (
              <div className="flex flex-col items-center py-1">
                About
                {isActive && (
                  <div className="h-0.5 w-3/5 bg-primary mt-1"></div>
                )}
              </div>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact">
            {({ isActive }) => (
              <div className="flex flex-col items-center py-1">
                Contact
                {isActive && (
                  <div className="h-0.5 w-3/5 bg-primary mt-1"></div>
                )}
              </div>
            )}
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative pb-4">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />

            {/* dropdown */}
            <div className="absolute top-full right-0 -mt-1 hidden group-hover:block z-20">
              <div className="bg-white  rounded flex flex-col gap-4 p-4  min-w-48">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

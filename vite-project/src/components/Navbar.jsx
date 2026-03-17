import React, { useContext } from "react";
import { assets_admin } from "../assets_admin/assets";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom"; // ✅ FIX

const Navbar = () => {
  const navigate = useNavigate();

  // ✅ FIX (context se values lo)
  const { aToken, setAToken } = useContext(AdminContext);

  const logout = () => {
    navigate("/");
    aToken && setAToken("");
    aToken && localStorage.removeItem("aToken");
  };

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
      <div className="flex items-center gap-2 text-xs">
        <img
          className="w-36 sm:w-40 cursor-pointer"
          src={assets_admin.admin_logo}
          alt=""
        />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-600 text-gray-600">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>

      <button
        onClick={logout}
        className="bg-primary text-white text-sm px-10 py-2 rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;

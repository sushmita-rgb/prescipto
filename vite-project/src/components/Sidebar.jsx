import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets_admin } from "../assets_admin/assets";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);

  return (
    <div className="min-h-screen bg-white border-r w-64">
      {aToken && (
        <ul className="text-gray-600 mt-6 space-y-1">
          <NavLink
            to="/admin-dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-5 cursor-pointer transition-all ${
                isActive
                  ? "bg-gray-100 border-r-4 border-primary text-gray-6000"
                  : "hover:bg-gray-50"
              }`
            }
          >
            <img src={assets_admin.home_icon} alt="" className="w-5" />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>

          <NavLink
            to="/all-appointments"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-5 cursor-pointer transition-all ${
                isActive
                  ? "bg-gray-100 border-r-4 border-primary text-gray-6000"
                  : "hover:bg-gray-50"
              }`
            }
          >
            <img src={assets_admin.appointment_icon} alt="" className="w-5" />
            <p className="hidden md:block">Appointments</p>
          </NavLink>

          <NavLink
            to="/add-doctor"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-5 cursor-pointer transition-all ${
                isActive
                  ? "bg-gray-100 border-r-4 border-primary text-gray-6000"
                  : "hover:bg-gray-50"
              }`
            }
          >
            <img src={assets_admin.add_icon} alt="" className="w-5" />
            <p className="hidden md:block">Add Doctor</p>
          </NavLink>

          <NavLink
            to="/doctor-list"
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-5 cursor-pointer transition-all ${
                isActive
                  ? "bg-gray-100 border-r-4 border-primary text-gray-600"
                  : "hover:bg-gray-50"
              }`
            }
          >
            <img src={assets_admin.people_icon} alt="" className="w-5" />
            <p className="hidden md:block">Doctors List</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;

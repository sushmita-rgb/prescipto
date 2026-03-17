import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets_admin } from "../assets_admin/assets";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  return (
    <div>
      {aToken && (
        <ul>
          <NavLink>
            <img src={assets_admin.home_icon} alt="" />
            <p>Dashboard</p>
          </NavLink>
          <NavLink>
            <img src={assets_admin.appointment_icon} alt="" />
            <p>Appointment</p>
          </NavLink>
          <NavLink>
            <img src={assets_admin.add_icon} alt="" />
            <p>Add doctor</p>
          </NavLink>
          <NavLink>
            <img src={assets_admin.people_icon} alt="" />
            <p>Doctors list</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;

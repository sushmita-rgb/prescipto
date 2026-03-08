import React, { useState } from "react";
import { assets_admin } from "../assets_admin/assets";

const Login = () => {
  const [state, setState] = useState("Admin");

  return (
    <form className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col gap-4 p-8 bg-white shadow-lg rounded-xl w-[320px]">
        <p className="text-2xl font-semibold text-center">
          <span className="text-primary">{state}</span> Login
        </p>

        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">Email</p>
          <input
            type="email"
            required
            className="border border-gray-300 rounded-md p-2 outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">Password</p>
          <input
            type="password"
            required
            className="border border-gray-300 rounded-md p-2 outline-none focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;

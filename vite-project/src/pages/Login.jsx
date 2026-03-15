import React, { useContext, useState } from "react";
import { assets_admin } from "../assets_admin/assets";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";

const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAToken, backendUrl } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === "Admin") {
        const { data } = await axios.post(`${backendUrl}/api/admin/login`, {
          email,
          password,
        });

        console.log("Response:", data);
        if (data.success) {
          console.log("Token:", data.token);

          localStorage.setItem("token", data.token);

          setAToken(data.token);
        } else {
          console.log("Login failed:", data.message);
        }
      }
    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-screen flex items-center justify-center bg-gray-100 text-primary"
    >
      <div className="flex flex-col gap-4 p-8 bg-white shadow-lg rounded-xl w-[320px]">
        <p className="text-2xl font-semibold text-center">
          <span className="text-primary">{state}</span> Login
        </p>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            required
            className="border border-gray-300 rounded-md p-2 outline-none focus:border-primary"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            required
            className="border border-gray-300 rounded-md p-2 outline-none focus:border-primary"
            placeholder="Enter your password"
          />
        </div>

        <button className="bg-primary text-white py-2 rounded-md hover:opacity-90 transition">
          Login
        </button>

        {state === "Admin" ? (
          <p className="text-sm">
            Doctor Login?{" "}
            <span
              onClick={() => setState("Doctor")}
              className="text-primary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-sm">
            Admin Login?{" "}
            <span
              onClick={() => setState("Admin")}
              className="text-primary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;

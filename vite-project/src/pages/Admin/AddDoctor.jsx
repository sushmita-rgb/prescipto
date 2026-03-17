import React from "react";
import { assets_admin } from "../../assets_admin/assets";

const AddDoctor = () => {
  return (
    <form className="m-5 w-full">
      {/* Title */}
      <p className="mb-5 text-2xl font-semibold text-gray-800">Add Doctor</p>

      {/* Card */}
      <div className="bg-white px-8 py-8 border border-gray-200 rounded-xl w-full max-w-5xl shadow-sm">
        {/* Upload */}
        <div className="flex items-center gap-4 mb-8 text-gray-600">
          <label htmlFor="doc-img">
            <img
              className="w-16 h-16 bg-gray-100 rounded-full cursor-pointer object-cover border"
              src={assets_admin.upload_area}
              alt=""
            />
          </label>
          <input type="file" id="doc-img" hidden />
          <p className="text-sm">Upload doctor picture</p>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <p className="mb-1 text-sm font-medium">Your Name</p>
            <input
              type="text"
              placeholder="Enter name"
              required
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <p className="mb-1 text-sm font-medium">Doctor Email</p>
            <input
              type="email"
              placeholder="Enter email"
              required
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <p className="mb-1 text-sm font-medium">Password</p>
            <input
              type="password"
              placeholder="Enter password"
              required
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <p className="mb-1 text-sm font-medium">Experience</p>
            <select className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-green-400">
              <option>1 Year</option>
              <option>2 Year</option>
              <option>3 Year</option>
              <option>4 Year</option>
            </select>
          </div>

          <div>
            <p className="mb-1 text-sm font-medium">Fees</p>
            <input
              type="number"
              placeholder="Enter fees"
              required
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <p className="mb-1 text-sm font-medium">Speciality</p>
            <select className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-green-400">
              <option>General physician</option>
              <option>Gynecologist</option>
              <option>Dermatologist</option>
              <option>Pediatricians</option>
              <option>Neurologist</option>
            </select>
          </div>

          <div>
            <p className="mb-1 text-sm font-medium">Education</p>
            <input
              type="text"
              placeholder="Enter education"
              required
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <p className="mb-1 text-sm font-medium">Address</p>
            <input
              type="text"
              placeholder="Address line 1"
              required
              className="w-full px-3 py-2 mb-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="Address line 2"
              required
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* About */}
        <div className="mt-6">
          <p className="mb-1 text-sm font-medium">About Doctor</p>
          <textarea
            placeholder="Write about doctor..."
            rows={4}
            required
            className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Button */}
      <button className="mt-6 bg-primary hover:bg-primary text-white px-8 py-3 rounded-lg transition-all">
        Add Doctor
      </button>
    </form>
  );
};

export default AddDoctor;

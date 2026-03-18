import React, { useContext, useState } from "react";
import { assets_admin } from "../../assets_admin/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!docImg) {
        return toast.error("Image Not Selected");
      }

      const formData = new FormData();

      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({
          line1: address1,
          line2: address2,
        }),
      );

      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        {
          headers: {
            aToken,
          },
        },
      );

      if (data.success) {
        toast.success(data.message);

        setDocImg(false);
        setName("");
        setEmail("");
        setPassword("");
        setExperience("1 Year");
        setFees("");
        setAbout("");
        setSpeciality("General physician");
        setDegree("");
        setAddress1("");
        setAddress2("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      {/* Title */}
      <p className="mb-5 text-2xl font-semibold text-gray-800">Add Doctor</p>

      {/* Card */}
      <div className="bg-white px-8 py-8 border border-gray-200 rounded-xl w-full max-w-5xl shadow-sm">
        {/* Upload */}
        <div className="flex items-center gap-4 mb-8 text-gray-600">
          <label htmlFor="doc-img" className="cursor-pointer">
            <img
              className="w-16 h-16 bg-gray-100 rounded-full object-cover border"
              src={
                docImg ? URL.createObjectURL(docImg) : assets_admin.upload_area
              }
              alt=""
            />
          </label>

          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="doc-img"
            hidden
          />

          <p className="text-sm">Upload doctor picture</p>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <p className="mb-1 text-sm">Full Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Enter name"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <p className="mb-1 text-sm">Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter email"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <p className="mb-1 text-sm">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter password"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <p className="mb-1 text-sm">Experience</p>
            <select
              onChange={(e) => setExperience(e.target.value)}
              value={experience}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option>1 Year</option>
              <option>2 Year</option>
              <option>3 Year</option>
              <option>4 Year</option>
            </select>
          </div>

          <div>
            <p className="mb-1 text-sm">Fees</p>
            <input
              onChange={(e) => setFees(e.target.value)}
              value={fees}
              type="number"
              placeholder="Enter fees"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <p className="mb-1 text-sm">Speciality</p>
            <select
              onChange={(e) => setSpeciality(e.target.value)}
              value={speciality}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option>General physician</option>
              <option>Gynecologist</option>
              <option>Dermatologist</option>
              <option>Pediatricians</option>
              <option>Neurologist</option>
            </select>
          </div>

          <div>
            <p className="mb-1 text-sm">Education</p>
            <input
              onChange={(e) => setDegree(e.target.value)}
              value={degree}
              type="text"
              placeholder="Education"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <p className="mb-1 text-sm">Address</p>
            <input
              onChange={(e) => setAddress1(e.target.value)}
              value={address1}
              type="text"
              placeholder="Address line 1"
              required
              className="w-full px-3 py-2 mb-2 border rounded-md"
            />
            <input
              onChange={(e) => setAddress2(e.target.value)}
              value={address2}
              type="text"
              placeholder="Address line 2"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
        {/* About */}
        <textarea
          onChange={(e) => setAbout(e.target.value)}
          value={about}
          placeholder="Write about doctor..."
          rows={4}
          required
          className="w-full mt-6 px-3 py-2 border rounded-md"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="mt-6 bg-primary text-white px-8 py-3 rounded-lg"
      >
        Add Doctor
      </button>
    </form>
  );
};

export default AddDoctor;

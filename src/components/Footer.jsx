import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flec flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text:sm">
        {/*    left section */}
        <div>
          <img className=" m-1b-5 w-40" src={assets.logo} alt="" />
          <br></br>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            hic sunt ex ratione suscipit. Placeat eum itaque inventore magni,
            beatae exercitationem odio cum fugiat eos provident ipsam expedita
            at perferendis.
          </p>
        </div>
        {/*    centre section */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <a href="./">Home</a>
            <a href="./about">About</a>
            <li>contact</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/*    right section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+11 22 3333</li>
            <li>test@gmail.com</li>
          </ul>
        </div>
      </div>{" "}
      {/* ---------comment test */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          {" "}
          Copyright © 2024 GreatStack - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

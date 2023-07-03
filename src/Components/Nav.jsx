import React from "react";
import logo from "../Assets/logo.png";

const Nav = () => {
  return (
    <div className=" flex justify-around items-center pt-5">
      <img src={logo} alt="" />
      <ul className=" flex flex-row gap-5 text-lg text-white font-semibold">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Testimonial</li>
        <li>Pricing</li>
      </ul>
      <button className=" w-28 h-12 bg-[#FF5A05] rounded-md text-white font-semibold">Get Started</button>
    </div>
  );
};

export default Nav;

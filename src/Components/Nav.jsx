import React from "react";
import logo from "../Assets/logo.png";
import Button from "./Button";

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
     <Button/>
    </div>
  );
};

export default Nav;

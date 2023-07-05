import React from "react";
import Pic from "../Assets/Group 186.png";
import mark from "../Assets/Group 1.png";
import Button from "./Button";

const MiddlePart = () => {
  return (
    <div className=" w-screen h-[25%] m-auto flex justify-around items-center ">
      <img src={Pic} alt="" className=" w-[37%] mt-20" />
      <div className=" w-[28%] flex flex-col align-top gap-2">
        <h6 className=" text-base font-semibold text-[#FF5A05]">
          Lorem ipsum dolor sit amet.
        </h6>
        <h2 className=" text-5xl font-bold ">Simple Solutions for</h2>
        <h2 className=" text-5xl font-bold ">Complex Connections</h2>
        <h3 className=" text-base font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec
          gravida feugiat neque, ipsum faucibus. Pharetra vel suspendisse mi
          odio a velit feugiat sapien.
        </h3>
        <div className=" flex flex-row gap-10">
          <div className=" flex flex-row gap-3">
            <img src={mark} alt="" />

            <p className="text-base font-bold">High Analysis</p>
          </div>
          <div className=" flex flex-row gap-3">
            <img src={mark} alt="" />
            <p className=" text-base font-bold">Certified Institute</p>
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default MiddlePart;

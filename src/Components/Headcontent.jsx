import React from "react";
import Photo from '../Assets/Pixel True Mockup 1.png'
import Button from "./Button";

const Headcontent = () => {
  return (
    <div className=" w-screen h-[100%] flex flex-row justify-around align-middle items-center text-white ">
      <div className=" w-[20%] h-[70%] bg-transparent flex flex-col  items-start gap-[5px]">
        <p className=" text-base font-semibold">INSPIRATION TECHNOLOGY.</p>
        <h1 className=" text-6xl font-extrabold ">Runs faster.</h1>
        <h2 className=" text-3xl font-bold " > Costs less and </h2>
        <h2 className=" text-3xl font-bold pb-4" >never breaks.</h2>
      <div className=" w-full h-[1px] bg-white"></div>
      <h5 className=" font-medium text-base pt-2 "> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Facilis eaque explicabo aliquid error voluptate deserunt est corporis aut.</h5>
      <div className=" flex gap-5 mt-5">
        <Button/>
        <button className=" w-32 h-12 bg-inherit rounded-md text-white font-semibold border-solid border-white border">Free Trial</button>
      </div>
      </div>
      <img className=" w-[28%]" src={Photo} alt="" />
    </div>
  );
};

export default Headcontent;

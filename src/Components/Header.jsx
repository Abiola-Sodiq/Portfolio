import React from "react";
import Nav from "./Nav";
import Headcontent from "./Headcontent";

const Header = () => {
  return (
    <div className=" w-screen h-[60%] bg-[#2E43F0]">
      <Nav />
      <Headcontent />
    </div>
  );
};

export default Header;

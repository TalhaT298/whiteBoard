import React from "react";
import logo from "../../../../src/assets/logo.png"
import { ImMan } from "react-icons/im";
const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="flex-1">
        <img src={logo} className="w-24 h-10" alt="" />
      </div>
      <div className="flex">
        <ul className="flex">
          <li>
          <ImMan className="w-8 h-8"/>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
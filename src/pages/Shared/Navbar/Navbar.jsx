import React from "react";
import logo from "../../../../src/assets/logo.png"
const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="flex-1">
        <img src={logo} className="w-24 h-10" alt="" />
      </div>
      <div className="flex">
        <ul className="flex">
          <li>
            <a>Link</a>
          </li>
          <li>
            <a>Link2</a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
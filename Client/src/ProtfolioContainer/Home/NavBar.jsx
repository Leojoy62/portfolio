import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div className="pt-10 px-[5%]">
        <ul className="text-white flex gap-16 justify-between items-center text-2xl font-semibold">
          <li className="text-5xl font-bold">
            LEO<span className="text-orange-600">N</span>ARD.
          </li>
          <ul className="text-white flex gap-16 justify-center items-center text-2xl font-semibold">
            <li className="style-nav">
              <a href="#home">Home</a>
            </li>
            <li className="style-nav">
              <a href="#about">AboutMe</a>
            </li>
            <li className="style-nav">
              <a href="#resume">Resume</a>
            </li>
            <li className="style-nav">
              <a href="#contact">ContactMe</a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

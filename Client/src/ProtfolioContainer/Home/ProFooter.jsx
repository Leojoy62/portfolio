import React from "react";

import bg from "../../../public/shape-bg.png";

import "./ProFooter.css";
const ProFooter = () => {
  return (
    <div className="footer-container ">
      <div className="footer-parent hidden md:block">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default ProFooter;

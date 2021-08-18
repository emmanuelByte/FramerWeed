import React from "react";
import Wavy from "../wavy/wavy";
import "./footer.css";
const Footer = () => {
  // background-color: rgb(100, 0, 123);

  return (
    <div>
      <Wavy colors={{ r: 100, g: 0, b: 123 }} />
      <div className="con">
        <p>Just a footer</p>
      </div>
    </div>
  );
};

export default Footer;

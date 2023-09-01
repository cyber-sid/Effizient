import React from "react";
import logo from "../Assets/logo.jfif";
import "./Header.css";

function Header() {
  return (
    <div className="Main-headContainer">
      <div className="Head-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="Head-title">
        <h1>SOP Generation Webpage</h1>
      </div>
    </div>
  );
}

export default Header;

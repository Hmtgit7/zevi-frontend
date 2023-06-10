import React from "react";
import logo from './assests/zevi logo.png'

export default function Logo() {
  return (
    <div className="logo-container">
      <img
        src={logo}
        alt="logo"
        className="logo"
      />
    </div>
  );
}
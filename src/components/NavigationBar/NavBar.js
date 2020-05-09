import React from "react";
import Logo from "../../image/eml-logo.png";
import "./nav-bar.css";
import NavSearch from "./nav-search/NavSearch";

const NavBar = () => {
  return (
    <div className="nav-home">
      <div className="nav-logo">
        <img className="eml-logo" src={Logo} alt="nav logo" />
      </div>
      <div className="nav-properties">
        <ul className="nav-ul">
          <li className="nav-li">Home</li>
          <li className="nav-li">About</li>
          <li className="nav-li">Service</li>
          <li className="nav-li">Portfoglio</li>
          <li className="nav-li">Page</li>
          <li className="nav-li">Contact</li>
        </ul>
        <div className="search-bar">
          <NavSearch />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

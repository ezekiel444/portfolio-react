import React from "react";
import Logo from "../../image/eml-logo.png";
import "./nav-bar.css";
import NavSearch from "./nav-search/NavSearch";
import { NavLink } from "react-router-dom";
// FiLoader;
// FiMenu;
// FiX;

const NavData = [
  { nav: "Home", path: "/home" },
  { nav: "About", path: "/about" },
  { nav: "Service", path: "/service" },
  { nav: "Portfoglio", path: "/portfoglio" },
  { nav: "Page", path: "/page" },
  { nav: "Contact", path: "/contact" },
];

const links = NavData.map((link) => (
  <NavLink className="hoverEffect" to={`/${link.path}`}>
    <li className="nav-li">{link.nav}</li>
  </NavLink>
));

const NavBar = () => {
  return (
    <div className="nav-home">
      <NavLink to="/">
        <div className="nav-logo">
          <img className="eml-logo" src={Logo} alt="nav logo" />
        </div>
      </NavLink>
      <div className="nav-properties">
        <ul className="nav-ul">{links}</ul>
        <div className="search-bar">
          <NavSearch />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

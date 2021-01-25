import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import {NavLink} from 'react-router-dom'
import { portfolioData } from "../../data";
import './nav.css'


const NavData = [
  { nav_name: "Home", path: "/" },
  { nav_name: "Service", path: "/service" },
  { nav_name: "Contact", path: "/contact"}
];


const NavBar = () => {
  const [isNavTrue, setNavTrue] = useState(false);
 
  return (
    <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-primary ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={portfolioData.logo} className="logo" alt="portfolio-logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setNavTrue(!isNavTrue)}
          >
          {isNavTrue ? (
            <IoMdClose color="rgb(190, 22, 140)" size="32" />
            ) : (
            <span className="navbar-toggler-icon"></span>
            )}
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <img
              className="mobilePix"
              src={portfolioData.profilePic}
              alt={portfolioData.name}
            />

            {NavData.map((link) => (
              <li className="nav-item" key={Math.random()}>
                <NavLink className="nav-link" to={`${link.path}`}>
                  {link.nav_name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
  
};

export default NavBar;

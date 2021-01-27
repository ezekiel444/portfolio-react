import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import {NavLink} from 'react-router-dom'
import { portfolioData } from "../../data";
import './nav.css'
import {motion} from 'framer-motion'


const NavData = [
  { nav_name: "Home", path: "/" },
  { nav_name: "Service", path: "/service" },
  { nav_name: "Contact", path: "/contact"}
];


const NavBar = () => {
  const [isNavTrue, setNavTrue] = useState(false);
 
  return (
    <motion.nav
      className="navbar navbar-expand-sm sticky-top navbar-light bg-primary"
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.3 }}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <motion.img
            src={portfolioData.logo}
            className="logo"
            alt="portfolio-logo"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.4 }}
          />
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
              <motion.li
                className="nav-item"
                key={Math.random()}
                initial={{ x: "100vw" }}
                animate={{ x: 0, type: "spring", stiffness: 2000 }}
                transition={{ duration: 1.4 }}
              >
                <NavLink className="nav-link" to={`${link.path}`}>
                  {link.nav_name}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
  
};

export default NavBar;

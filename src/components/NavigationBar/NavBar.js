import React, { useState } from "react";
import * as Styles from './NavStyles'
import Logo from "../../image/eml-logo.png";
import { NavLink } from "react-router-dom";
import { FaBars, FaSearchengin } from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import {IoIosHome} from 'react-icons/io';
import { ImProfile } from "react-icons/im";
import { GrServices } from "react-icons/gr";
import { MdContactMail, MdPages } from "react-icons/md";







const NavData = [
  { nav: "Home", path: "/", icon:<IoIosHome/> },
  { nav: "About", path: "/about", icon: <ImProfile/> },
  { nav: "Service", path: "/service", icon: <GrServices/> },
  { nav: "Contact", path: "/contact", icon:<MdContactMail/> },
  { nav: "Footer", path: "/footer",  icon:<MdPages/> },
];




const links = NavData.map((link) => (
  <NavLink key={Math.random()} to={`${link.path}`}>
    <div className="nav-links">{link.icon} <span>{link.nav}</span></div>
  </NavLink>
));



const NavBar = () => {
  const [click, setClick] = useState(false)

  
  return (
    <Styles.NavHome>
      <NavLink to="/">
        <Styles.NavLogo>
          <img src={Logo} alt="nav logo" />
        </Styles.NavLogo>
      </NavLink>
      <Styles.NavSearch >
      <FaSearchengin className='searchIcon' color='#757575' size="1em" /> <input placeholder="search" type="text" />
    </Styles.NavSearch>

  <div className='windowlayout'>{links}</div>

 <div className='mobilelayout' onClick={()=>setClick(!click)}>{click ? (<div className='navPlaceHolder'><AiOutlineClose/> <div className='formatDropDownView'>{links}</div> </div> ) : <FaBars />}</div>

    </Styles.NavHome>
  );
};

export default NavBar;

// <div className="link_format">{links}
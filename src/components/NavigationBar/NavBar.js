import React, { useState, useRef, useEffect } from "react";
import * as Styles from './NavStyles'
import Logo from "../../image/eml-logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaSearchengin } from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import {IoIosHome} from 'react-icons/io';
import { ImProfile } from "react-icons/im";
import { GrServices } from "react-icons/gr";
import { MdContactMail, MdPages } from "react-icons/md";


const NavData = [
  { nav_name: "Home", path: "/", icon:<IoIosHome/> },
  { nav_name: "About", path: "/about", icon: <ImProfile/> },
  { nav_name: "Service", path: "/service", icon: <GrServices/> },
  { nav_name: "Contact", path: "/contact", icon:<MdContactMail/> },
  { nav_name: "Footer", path: "/footer",  icon:<MdPages/> },
];



const NavBar = () => {
  const [showNav, setShowNav] = useState(false)
  const linksRef = useRef(null)
  const navContainerRef = useRef(null)
  
useEffect(()=>{
  const containerLinksRef = linksRef.current.getBoundingClientRect()
  if(showNav){
navContainerRef.current.style.height = `${containerLinksRef.height}px`;
  }else{
navContainerRef.current.style.height = "0px";
  }

},[showNav])

  
  return (
    <Styles.NavContainer>
      <NavLink to="/">
        <div style={{ width: "90px" }}>
          <img src={Logo} alt="nav logo" />
        </div>
      </NavLink>

      <div ref={navContainerRef} className="main-links-container">
        <ul ref={linksRef} className="links-container">
          {NavData.map((link) => (
            <li key={Math.random()}>
              <NavLink to={`${link.path}`}>
                <div>{link.icon}</div>
                {link.nav_name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <button className="toggleNav" onClick={() => setShowNav(!showNav)}>
        {showNav ? <AiOutlineClose size="60" /> : <FaBars size="60" />}
      </button>
    </Styles.NavContainer>
  );
};

export default NavBar;


//  <Styles.NavHome>
//       <NavLink to="/">
//         <Styles.NavLogo>
//           <img src={Logo} alt="nav logo" />
//         </Styles.NavLogo>
//       </NavLink>
//       <Styles.NavSearch >
//       <FaSearchengin className='searchIcon' color='#757575' size="1em" /> <input placeholder="search" type="text" />
//     </Styles.NavSearch>

  

//  {/* <div className='mobilelayout' onClick={()=>setClick(!click)}>{click ? (<div className='navPlaceHolder'><AiOutlineClose/> <div className='formatDropDownView'>{links}</div> </div> ) : <FaBars />}</div> */}

//     </Styles.NavHome>
  
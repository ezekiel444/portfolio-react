import React,{Fragment}  from "react";
import {Link} from "react-router-dom"
import FooterStyle from './FooterStyle'
import { FiTarget, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const socialLogo = [
  { icon: <FiTwitter/> , label: "Twitter"},
  { icon: <FiInstagram/>, label: "Instagram" },
  { icon: <FiLinkedin/> , label : "Linkedin" },
];

const logos = socialLogo.map((logo) => (
  <Fragment key={Math.random()}>
 <Link to="#">
<div>{logo.icon} <span className='label'>{logo.label}</span> </div>
 </Link>
 </Fragment>
));


export default function Footer() {
  return (
    <FooterStyle>
      <div className="footer-address">
        <h2>
          <FiTarget />
          Portfolio
        </h2>
        <h3>ezekielmatomi588@gmail.com</h3>
        <h4> Grenoble France</h4>
      </div>
      <section className="footer-right">
        <p>
          Copyright ©{new Date().getFullYear()} All rights reserved | By <span>Ezekiel
          Matomi Lucky</span>.
        </p>
        <div className="footer-icon">
          <h2>Stay Connected</h2>
         {logos}
        </div>
      </section>
    </FooterStyle>
  );
}

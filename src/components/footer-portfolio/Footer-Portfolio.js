import React,{Fragment}  from "react";
import {Link} from "react-router-dom"
import "./portfolio.css";
import { FiTarget, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const socialLogo = [
  { icon: FiTwitter , label: "Twitter"},
  { icon: FiInstagram, label: "Instagram" },
  { icon: FiLinkedin , label : "Linkedin" },
];

const logos = socialLogo.map((logo) => (
 
  <Fragment   key={Math.random()}>
 <Link to="#"><div className="logoContainer"><logo.icon className="eachLogo"></logo.icon><span className="labelAttribute">{logo.label}</span></div> </Link>
 </Fragment>
));

export default function Footer() {
  return (
    <footer>
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
          Copyright ©{new Date().getFullYear()} All rights reserved | By Ezekiel
          Matomi Lucky.
        </p>
        <div className="footer-icon">
          <h2>Stay Connected</h2>
         {logos}
        </div>
      </section>
    </footer>
  );
}

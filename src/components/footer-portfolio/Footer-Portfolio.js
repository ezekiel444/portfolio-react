import React, { Fragment } from "react";
import "./portfolio.css";
import { FiTarget, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const socialLogo = [
  { icon: FiTwitter },
  { icon: FiInstagram },
  { icon: FiLinkedin },
];

const logos = socialLogo.map((logo) => (
  <Fragment key={Math.random()}>
    <logo.icon />
  </Fragment>
));

export default function Portfolio() {
  return (
    <footer>
      <div className="footer-address">
        <h2>
          <FiTarget />
          Portfolio
        </h2>
        <h2>ezekielmatomi588@gmail.com</h2>
        <h4>my house address #####</h4>
      </div>
      <section className="footer-right">
        <p>
          Copyright ©{new Date().getFullYear()} All rights reserved | By Ezekiel
          Matomi Lucky (eml)
        </p>
        <div className="footer-icon">
          <h2>Stay Connected</h2>
          <p> {logos}</p>
        </div>
      </section>
    </footer>
  );
}

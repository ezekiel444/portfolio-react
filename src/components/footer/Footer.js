import React,{Fragment}  from "react";
import FooterStyle from './FooterStyle'
import { FiTarget, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export const socialLogo = [
  {
    id: 1,
    icon: <FiTwitter />,
    medialAccount: "https://twitter.com/ezekielluckylu1",
  },
  {
    id: 2,
    icon: <FiInstagram />,
    medialAccount: "https://instagram.com/ezekielmatomilucky",
  },
  {
    id: 3,
    icon: <FiLinkedin />,
    medialAccount:
      "https://codeyourfuture.slack.com/archives/DJBKLPZC6/p1608407473000200",
  },
  { id: 4, icon: <FaGithub />, medialAccount: "https://github.com/ezekiel444" },
];

const logos = socialLogo.map(({ icon, medialAccount }) => (
  <Fragment key={Math.random()}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`${medialAccount}`}
      >
      <div>{icon}</div>
    </a>
  </Fragment>
));


export default function Footer({ TiArrowUpThick }) {

  return (
    <FooterStyle>
      <div className="container">
        <section>
          <h2>
            <FiTarget />
            Portfolio
          </h2>
          <h3>ezekielmatomi588@gmail.com</h3>
          <h4> Grenoble France</h4>
        </section>

        <section>
          <div>{logos}</div>
          <p>
            Copyright ©{new Date().getFullYear()} All rights reserved | By{" "}
            Ezekiel Matomi Lucky.
          </p>
        </section>
      </div>
      {/* scroll-up arrow */}
      <TiArrowUpThick
        className="btn"
        onClick={() => window.scrollTo(0, 0)}
      ></TiArrowUpThick>
    </FooterStyle>
  );
}

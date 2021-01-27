import React,{Fragment}  from "react";
import FooterStyle from './FooterStyle'
import { FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <motion.a
      target="_blank"
      rel="noopener noreferrer"
      href={`${medialAccount}`}
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1.4 }}
    >
      <span>{icon}</span>
    </motion.a>
  </Fragment>
));


export default function Footer({ TiArrowUpThick }) {

  return (
    <FooterStyle
      className="container-fluid"
      
    >
      <p>{logos}</p>
      <p>
        Copyright ©{new Date().getFullYear()} All rights reserved | By Ezekiel
        Matomi Lucky.
      </p>
    </FooterStyle>
  );
}

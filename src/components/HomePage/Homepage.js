import React from "react";
import Particles from "react-particles-js";
import Typed from 'react-typed'
import { portfolioData } from "../../data";
import HomePageCss from './HomePage.module.css'
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {

  return (
    <main className={`container ${HomePageCss.container}`}>
      <div className={`row ${HomePageCss.flipRow}`}>
        <div className="col-sm-12 col-md-6 col-xl-6">
          <motion.figure
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.4 }}
          >
            <img src={portfolioData.profilePic} alt="beatiful profile picx" />

            <figcaption>
              <a
                href="https://drive.google.com/file/d/1TlDNvdcE_OFzKHm1-Vr4djMf2eh8eJYA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Cv Fr
              </a>
              <a
                href="https://drive.google.com/file/d/1nl-kwG3bXs2R3UFRtspSN5jTQvN0uWM3/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Cv En
              </a>
              <a href="tel:+33753432920" rel="noopener noreferrer">Direct Call</a>
            </figcaption>
          </motion.figure>
        </div>
        <motion.div
          className="col-sm-12 col-md-6 col-xl-6"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.4 }}
        >
          <h3>GET EVERY SIGLE SOLUTION</h3>
          <h1>
            Hi, I'm <br /> Ezekiel Matomi Lucky
          </h1>
          <p>
            I am a Software developer and tech enthusiast versed with a lot of
            programming languages and tools. I share knowledge about Web
            programming, mostly HTML, CSS, Javascript, React Hooks, Node Js,
            GraphQL and PostgreSQL/MongoDB with various folks. I also mentor at
            Codeyourfuture South Africa group 2021. Looking forward to connect
            with great minds across the globe.
          </p>
          <aside className={HomePageCss.moreInfo}>
            <NavLink to="/">Know more about me</NavLink>
          </aside>
        </motion.div>

        <section className={HomePageCss.particlesControl}>
          <Typed
            strings={[
              "Here you can find anything:",
              "Any kind of web design",
              "Open for full time job",
              "Open for intership",
              "Open for part-time job",
              "Good orator",
              "Consumer satisfaction is my priority.",
            ]}
            className={HomePageCss.typed}
            typeSpeed={30}
            backSpeed={30}
            loop
          />

          <Particles
            className={HomePageCss.particles}
            params={{
              particles: {
                number: {
                  value: 8,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                line_linked: {
                  enable: false,
                },
                move: {
                  speed: 1,
                  out_mode: "out",
                },
                shape: {
                  type: ["image", "circle"],
                  image: [
                    {
                      src:
                        "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
                      height: 200,
                      width: 230,
                    },
                    {
                      src:
                        "https://raw.githubusercontent.com/alDuncanson/react-hooks-snippets/master/icon.png",
                      height: 200,
                      width: 200,
                    },
                    {
                      src:
                        "https://mpng.subpng.com/20180504/auq/kisspng-node-js-javascript-installation-web-application-cvs-entries-2-pngtree-com-js-home-user_service-js-5aec73a7322bb2.8480788715254455432055.jpg",
                      height: 200,
                      width: 200,
                    },
                  ],
                },
                color: {
                  value: "#000000",
                },
                size: {
                  value: 30,
                  random: false,
                  anim: {
                    enable: true,
                    speed: 4,
                    size_min: 100,
                    sync: false,
                  },
                },
              },
              retina_detect: false,
            }}
          />
        </section>
      </div>
    </main>
  );
};

export default HomePage;

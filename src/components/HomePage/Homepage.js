import React from "react";
import Particles from "react-particles-js";
import Typed from 'react-typed'
import { portfolioData } from "../../data";
import HomePageCss from './HomePage.module.css'
import Btn from '../customButton/Btn'

const HomePage = () => {

  return (
    <main className={`container ${HomePageCss.container}`}>
      <div className={`row ${HomePageCss.flipRow}`}>
        <div className="col-sm-12 col-md-6 col-xl-6">
          <figure>
            <img src={portfolioData.profilePic} alt="beatiful profile picx" />

            <figcaption>
              <Btn link="contact" text="Contact" />
            </figcaption>
          </figure>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-6">
          <h3>GET EVERY SIGLE SOLUTION</h3>
          <h1>
            I'm Designer <br /> Ezekiel Matomi Lucky
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quidem
            laborum tenetur non officia cumque, aut fugiat in voluptatibus enim
            numquam nulla est. Odio a nulla numquam? Quas, facilis ab.
          </p>
          <div className="learn-hire-button">
            <div>Learn</div>
            <div>Hire Me</div>
          </div>
        </div>

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

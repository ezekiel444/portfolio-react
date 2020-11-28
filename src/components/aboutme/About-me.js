import React from "react";
import profileLogo from "../../image/myProfile.jpg";
import {AboutButton, HomePage} from './aboutStyle'

const AboutMe = () => {
  return (
    <HomePage>
      <div className="profile-img-container">
        <img src={profileLogo} alt="profile picx" />
      </div>
      <div className="about-my-profile">
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
          <AboutButton aboutcolor>Learn</AboutButton >
          <AboutButton >Hire Me</AboutButton >
        </div>
      </div>
    </HomePage>
  );
};

export default AboutMe;

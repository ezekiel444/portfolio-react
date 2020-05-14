import React from "react";
import "./about-me-page.css";
import profileLogo from "../../image/myProfile.jpg";

const AboutMe = () => {
  return (
    <div className="home-page">
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
          <button className="general-button learn">Learn</button>
          <button className="general-button hire">Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

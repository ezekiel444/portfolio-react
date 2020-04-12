import React from "react";
import myProfile from "../../../image/myProfile.jpg";
import "./history.css";

export default function History() {
  return (
    <div className="historyDesign">
      <div>
        <h3>My Recent Project</h3>
        <img src={myProfile} alt="profileCircle" />
      </div>
      <section className="History">
        <div className="project1 box-size">project 1</div>
        <div className="project2 box-size">project 2</div>
        <div className="project3 box-size">project 3</div>
      </section>
    </div>
  );
}

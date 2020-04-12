import React from "react";
import "./homeStyle.css";
import ProfileImage from "../../../image/myProfile.jpg";
import Portfoglio from "../portfoglio/Portfoglio";
import History from "../portfoglio/History";

function Home() {
  return (
    <div className="homeDesign">
      <section className="SectionContainer">
        <img src={ProfileImage} alt="profile picx" />
        <section className="profileSection">
          <h1>
            Howdy, I'm <strong>Ezekiel Matomi</strong>
          </h1>
          <p>
            A Product Designer working at Facebook. Separated they live in
            Bookmarksgrove right at the coast of the Semantics, a large language
            ocean.
          </p>
        </section>
      </section>
    </div>
  );
}

export default Portfoglio(Home, History, "example");

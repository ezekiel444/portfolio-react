import React from "react";
import "./serviceStyle.css";
import { MdArrowForward } from "react-icons/md";
import ExpectedService from "../HousingServices";
import ExtraService from "../extraservice/ExtraService";

function Service() {
  return (
    <div className="serviceHome">
      <div className="serviceDesign">
        <div>
          <h2>Designing With Passion While Exploring The World.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing eveniet,
            adipisci unde qui odit dolore, modi velit inventore soluta. Saepe,
            beatae.
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            dolores consectetur cupiditate?
          </p>
        </div>
      </div>
      <div className="serviceContact">
        <section>
          <h2>Any Type Of Query & Discussion.</h2>
          <h3>Late talk with me</h3>
          <span>
            hire@ezekielmatomi588@gmail.com <MdArrowForward />
          </span>
        </section>
      </div>
    </div>
  );
}

const serviceOffer = [
  { id: 1, icon: "icon", title: "UI/UX Design", details: "Hellllooo" },
  {
    id: 2,
    icon: "icon",
    title: "DIGITAL MARTKETING",
    details: "normal testing",
  },
  { id: 3, icon: "icon", title: "WEBSITE Design", details: "website" },
];

export default ExpectedService(Service, ExtraService, serviceOffer);

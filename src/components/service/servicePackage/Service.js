import React from "react";
import "./serviceStyle.css";
import { MdArrowForward } from "react-icons/md";
import ExpectedService from "../HousingServices";
import ExtraService from "../extraservice/ExtraService";

function Service() {
  return (
    <div className="serviceHome">
      <div className="serviceDesign">
        <h1>Designing With Passion While Exploring The World.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, totam
          esse. Quo dicta rerum fugiat nobis distinctio consequatur eveniet,
          adipisci unde qui odit dolore, modi velit inventore soluta. Saepe,
          beatae.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          dolores consectetur cupiditate?
        </p>
      </div>
      <div className="serviceContact">
        <section>
          <h1>Any Type Of Query & Discussion.</h1>
          <span>Late talk with me</span>
          <h2>
            hire@ezekielmatomi588@gmail.com <MdArrowForward />
          </h2>
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

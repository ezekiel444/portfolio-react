import React from "react";
import "./extraservice.css";

export default function ExtraService({ serviceOffer }) {
  const services = serviceOffer.map((offer) => (
    <div className="serviceDesignControl" key={offer.id}>
      <div className="extra-service-box">{offer.icon}</div>
      <h1 className="extra-service-box">{offer.title}</h1>
      <p className="extra-service-box">{offer.details}</p>
    </div>
  ));
  return (
    <div>
      <h1>What Services you will Get from me!</h1>
      <div className="serviceOffer">{services}</div>
    </div>
  );
}

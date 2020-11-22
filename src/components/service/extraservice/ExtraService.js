import React from "react";
import ServiceOffer from "./ExtraserviceStyle"

export default function ExtraService({ serviceOffer }) {
  const services = serviceOffer.map((offer) => (
    <div className="serviceDesignControl" key={offer.id}>
      <div className="extra-service-box">{offer.icon}</div>
      <h2 className="extra-service-box">{offer.title}</h2>
      <p className="extra-service-box">{offer.details}</p>
    </div>
  ));
  return (
    <div>
      <h2>What Services you will Get from me!</h2>
      <ServiceOffer>{services}</ServiceOffer>
    </div>
  );
}

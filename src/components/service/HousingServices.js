import React from "react";

const ExpectedService = (ServiceComponent, ExtraService, arg) => {
  return (props) => (
    <>
      <ServiceComponent />
      <ExtraService serviceOffer={arg} />
    </>
  );
};

export default ExpectedService;

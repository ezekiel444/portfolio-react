import React from "react";

function Portfoglio(WrappedHome, WrappedHistory, arg) {
  return (props) => {
    return (
      <>
        <WrappedHome matomi={"this is matomi"} />
        <hr />
        <WrappedHistory />
      </>
    );
  };
}

export default Portfoglio;

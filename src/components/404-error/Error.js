import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <div style={{ height: "40vh", textAlign: "center", marginTop: "50px" }}>
        <Link className="btn" to="/">
          Go to HomePage
        </Link>
      </div>
    </>
  );
}

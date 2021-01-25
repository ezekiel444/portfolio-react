import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
    <div>
<h1>Error Page</h1>
      <Link style={{margin:'auto', background: "#DD2C00" }} to="/">
             Back to HomePage
          </Link>
    </div>
    </>
  );
}
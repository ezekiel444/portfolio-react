import React from "react";
import { FaKissWinkHeart } from "react-icons/fa";
import "./footerStyle.css";
export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="icons"></div>
        <p>
          Copyright © 2020 All rights reserved | This template is made with
          <span id="kiss">
            <FaKissWinkHeart />
          </span>
          by Ezekiel Matomi Lucky
        </p>
      </div>
    </div>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import "./navStyle.css";

export default function NavBar() {
  return (
    <div className="navControl">
      <h1>EMl</h1>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>

        <NavLink to="/images">
          <li>Images</li>
        </NavLink>

        <NavLink to="/cv">
          <li>CV</li>
        </NavLink>

        <NavLink to="/search">
          <li>Search</li>
        </NavLink>

        <NavLink to="/about">
          <li>About</li>
        </NavLink>
      </ul>
    </div>
  );
}

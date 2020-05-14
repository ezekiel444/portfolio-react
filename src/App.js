import React from "react";
import "./App.css";
import {
  NavBar,
  Service,
  Contact,
  Portfolio,
  TiArrowUpThick,
  AboutMe,
} from "./components/HomeOfComponents";
import "./components/scrollup.css";

function App() {
  return (
    <>
      <header className="header-sticky">
        <NavBar />
        <hr />
      </header>
      <AboutMe />
      <Service />
      <Contact />
      <Portfolio />
      <TiArrowUpThick
        className="scrollTop"
        onClick={() => window.scrollTo(0, 0)}
      ></TiArrowUpThick>
    </>
  );
}

export default App;

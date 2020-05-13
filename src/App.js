import React from "react";
import "./App.css";
import {
  NavBar,
  HomePage,
  Service,
  Contact,
  Portfolio,
} from "./components/HomeOfComponents";

function App() {
  return (
    <>
      <header className="header-sticky">
        <NavBar />
        <hr />
      </header>
      <HomePage />
      <Service />
      <Contact />
      <Portfolio />
    </>
  );
}

export default App;

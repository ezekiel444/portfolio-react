import React from "react";
import "./App.css";
import {
  NavBar,
  HomePage,
  Service,
  Contact,
} from "./components/HomeOfComponents";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <hr />
      </header>
      <HomePage />
      <Service />
      <Contact />
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import { NavBar, HomePage } from "./components/HomeOfComponents";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <hr />
      </header>
      <HomePage />
    </>
  );
}

export default App;

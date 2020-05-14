import React from "react";
import "./App.css";
import {
  NavBar,
  Service,
  Contact,
  Footer,
  TiArrowUpThick,
  AboutMe,
  HomePage,
} from "./components/HomeOfComponents";
import "./components/scrollup.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <header className="header-sticky">
        <NavBar />
      </header>
      <hr />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutMe} />
        <Route path="/service" component={Service} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />

      {/* scroll-up arrow */}
      <TiArrowUpThick
        className="scrollTop"
        onClick={() => window.scrollTo(0, 0)}
      ></TiArrowUpThick>
    </>
  );
}

export default App;

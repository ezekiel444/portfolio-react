import React from "react";
import GlobalFonts from './fonts/fonts';
import {
  NavBar,
  Service,
  Contact,
  Footer,
  TiArrowUpThick,
  AboutMe,
  HomePage,
  Error,
} from "./components/HomeOfComponents";

import { Route, Switch } from "react-router-dom";



function App() {
  return (
    <>
      <GlobalFonts />
      <header className="header-sticky">
        <NavBar />
      </header>
      <hr />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutMe} />
        <Route path="/service" component={Service} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer TiArrowUpThick={TiArrowUpThick} />
    </>
  );
}

export default App;

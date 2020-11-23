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
} from "./components/HomeOfComponents";
import { Route, Switch } from "react-router-dom";





function App() {
  return (
    <>
      <GlobalFonts/>
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

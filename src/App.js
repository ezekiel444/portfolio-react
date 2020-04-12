import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home.Component/Home";
import Images from "./components/pages/imagesFile/Images";
import CV from "./components/pages/portfoglio/Cv";
import Search from "./components/pages/search/Search";
import About from "./components/pages/about/About";
import Error from "./components/pages/error/Error";
import NavBar from "./components/pages/nav.Component/NavBar";
import Footer from "./components/pages/footer.component/Footer";
import AllImages from "../src/components/pages/imagesFile/AllImages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="navHeader">
          <NavBar />
          <hr />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/images" exact component={Images} />
          <Route path="/images/:id" component={AllImages} />
          <Route path="/cv" component={CV} />
          <Route path="/search" component={Search} />
          <Route path="/about" component={About} />
          <Route component={Error} />
        </Switch>
        <hr />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

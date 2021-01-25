import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


import { Route, Switch } from "react-router-dom";
import './App.css'
import NavBar from "./components/NavigationBar/NavBar";
import HomePage from './components/HomePage/Homepage'
import Contact from './components/contact/Contact'
import Error from './components/404-error/Error'
import Footer from './components/footer/Footer'
import Service from "./components/service/Service";

function App() {

  return (
    <>
      <NavBar />

      <hr />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={Contact} />
        <Route path="/service" component={Service} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

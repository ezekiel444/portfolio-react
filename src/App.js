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
// require();
function App() {

  return (
    <>
      <NavBar />
      
      {/* <a download href="./asserts/En_CV_EZEKIEL_MATOMI_LUCKY.pdf">
        test download
      </a> */}

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

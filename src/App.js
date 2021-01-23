import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


import { Route, Switch } from "react-router-dom";
import './App.css'
import HomePage from './components/HomePage/Homepage'
import NavBar from "./components/NavigationBar/NavBar";
import Error from './components/404-error/Error'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <NavBar />

      <hr />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/" component={HomePage} />
        <Route path="/" component={HomePage} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer/>
    </>
  );
}

export default App;

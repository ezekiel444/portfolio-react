import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import theme from './theme/colors'
import {ThemeProvider} from "styled-components"
import GlobalStyle from "./globalStyle/GlobalEffect"
import {IconContext} from 'react-icons'


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle/>
  <BrowserRouter>
  <IconContext.Provider value={{size:"3em", color:'#3A7ADE'}}>
    <App />
    </IconContext.Provider>
  </BrowserRouter>

  </ThemeProvider>,
  document.getElementById("root")
);

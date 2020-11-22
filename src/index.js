import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import theme from './theme/colors'
import {ThemeProvider} from "styled-components"
import GlobalStyle from "./globalStyle/GlobalEffect"


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle/>
  <BrowserRouter>
    <App />
  </BrowserRouter>

  </ThemeProvider>,
  document.getElementById("root")
);

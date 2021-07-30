import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home.jsx';
import reportWebVitals from './reportWebVitals';
import History from "./History.jsx"
import Team from "./Team.jsx"
import { BrowserRouter } from "react-router-dom";
import { Route,Switch } from "react-router-dom";
import { Navlink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <>
  <BrowserRouter>

  <Switch>

    <Route exact path="/">
      <Home />
    </Route>

    <Route path="/History">
      <History/>
    </Route>

    <Route path="/Team">
      <Team/>
    </Route>
  </Switch>

  </BrowserRouter>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

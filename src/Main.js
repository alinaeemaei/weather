import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import App from "./App";
import Home from "./component/Home/Home";
import "./App.css";

class Main extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/name" component={App} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Main;

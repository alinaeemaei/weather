import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import ChangeLocation from "./component/ChangeLocation/ChangeLocation";
import Home from "./component/Home/Home";
import "./App.css";

class Main extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/name" component={ChangeLocation} test="gooz" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Main;

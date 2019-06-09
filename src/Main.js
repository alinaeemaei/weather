import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import ChangeLocation from "./component/ChangeLocation/ChangeLocation";
import Home from "./component/Home/Home";
import GetAPI from "./component/Home/GetAPI";
import "./App.css";

class Main extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/weather/name" component={ChangeLocation} />
            <Route path="/home/:name" component={GetAPI} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Main;

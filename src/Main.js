import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import App from "./App";
import "./App.css";

function Main() {
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

const Home = () => (
  <div>
    <h1>
      Home asdf asdfasdf asdfasdffas dfas dfassdf asdfasdfasd fasd fasdf asdfasd
    </h1>
  </div>
);

export default Main;

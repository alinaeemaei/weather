import React, { Component } from "react";
import "./App.css";
import AutoCompleteText from "./component/AutoCompleteText";

class App extends Component {
  state = {
    temp: "",
    humidity: "",
    image: ""
  };

  getWeatherInfo = async e => {
    e.preventDefault();
    const api = await fetch(
      `http://api.apixu.com/v1/current.json?key=1652ea732ca848b7bd6100429192205&q=tehran`
    );
    const data = await api.json();
    console.log(data);
  };
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.getWeatherInfo}>
            <input type="text" placeholder="enter City" />
            <button>search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;

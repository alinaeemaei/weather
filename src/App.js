import React, { Component } from "react";
import "./App.css";
import AutoCompleteText from "./component/AutoCompleteText";

class App extends Component {
  state = {
    City: "",
    country: "",
    condition: "",
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
    this.setState({
      City: data.location.name,
      country: data.location.country,
      temp: data.current.temp_c,
      humidity: data.current.humidity,
      image: data.current.condition.icon,
      condition: data.current.condition.text
    });
  };
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.getWeatherInfo}>
            <input type="text" placeholder="enter City" />
            <button>search</button>
          </form>

          <h5>city: {this.state.City}</h5>
          <h5>country: {this.state.country}</h5>
          <h5>condition: {this.state.condition}</h5>
          <h5>temp: {this.state.temp}</h5>
          <h5>humidity: {this.state.humidity}</h5>
          <img src={this.state.image} alt="" />
        </div>
      </div>
    );
  }
}

export default App;

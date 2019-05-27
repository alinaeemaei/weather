import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    newCity: "",
    City: "tehran",
    country: "",
    condition: "",
    temp: "",
    humidity: "",
    image: "",
    searchValu: []
  };

  getWeatherInfo = async e => {
    e.preventDefault();
    if (this.state.newCity !== "") {
      const api = await fetch(
        `http://api.apixu.com/v1/current.json?key=1652ea732ca848b7bd6100429192205&q=${
          this.state.newCity
        }`
      );
      const data = await api.json();

      this.setState({
        City: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        humidity: data.current.humidity,
        image: data.current.condition.icon,
        condition: data.current.condition.text
      });
    }
  };

  autoCompleteText = async e => {
    const search = e.target.value;
    const url = await fetch(
      `http://api.apixu.com/v1/search.json?key=1652ea732ca848b7bd6100429192205&q=${search}`
    );
    var data = await url.json();
    if (search.length >= 3) {
      this.setState({
        searchValu: data
      });
    }
    console.log(this.state.searchValu);
  };

  changeLocationHandler(event) {
    console.log(event.target.value);
    this.setState({
      newCity: event.target.value
    });
  }
  render() {
    return (
      <div>
        <div>
          <form
            onSubmit={this.getWeatherInfo}
            onChange={this.autoCompleteText.bind(this)}
          >
            <input type="text" placeholder="enter City" />
            <button>search</button>
          </form>

          <h5>city: {this.state.City}</h5>
          <h5>country: {this.state.country}</h5>
          <h5>condition: {this.state.con}</h5>
          <h5>temp: {this.state.temp}</h5>
          <h5>humidity: {this.state.humidity}</h5>
          <img src={this.state.image} alt="" />
        </div>
        <div>
          <ul>
            {this.state.searchValu.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

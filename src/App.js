import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    newCity: "",
    newcityFullname: "",
    City: "",
    country: "",
    condition: "",
    temp: "",
    humidity: "",
    image: "",
    searchValu: [],
    text: ""
  };

  getWeatherInfo = async e => {
    e.preventDefault();
    if (this.state.newCity !== "") {
      const api = await fetch(
        `http://api.apixu.com/v1/current.json?key=1652ea732ca848b7bd6100429192205&q=${
          this.state.newcityFullname
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
    this.setState({ text: search });
    if (search.length >= 3) {
      this.setState({
        searchValu: data,
        newcityFullname: search,
        newCity: search
      });
    }
  };

  changeLocationHandler(event) {
    console.log(event.target.value);
    this.setState({
      newCity: event.target.value,
      textBoxValue: event.target.value
    });
  }

  SearchListHandle(event) {
    this.setState({
      newcityFullname: event.target.getAttribute("data-itemid"),
      text: event.target.getAttribute("data-itemid"),
      searchValu: []
    });
    console.log(this.state.newcityFullname);
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <div>
          <div className="autoComplete">
            <form onSubmit={this.getWeatherInfo}>
              <input
                value={text}
                onChange={this.autoCompleteText.bind(this)}
                type="text"
                placeholder="enter City"
              />
              <button>search</button>
            </form>
            <ul onClick={this.SearchListHandle.bind(this)}>
              {this.state.searchValu.map(item => (
                <li key={item.id} data-itemid={item.name}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <h5>city: {this.state.City}</h5>
          <h5>country: {this.state.country}</h5>
          <h5>condition: {this.state.con}</h5>
          <h5>temp: {this.state.temp}</h5>
          <h5>humidity: {this.state.humidity}</h5>
          <img src={this.state.image} alt="" />
        </div>
        <div />
      </div>
    );
  }
}

export default App;

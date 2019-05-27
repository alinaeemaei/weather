import React, { Component } from "react";
import "./App.css";
import SearchForm from "./component/searchForm/SearchForm";
import LocationDetail from "./component/LocationDetail/LocationDetail";

class App extends Component {
  state = {
    placeholder: "enter city",
    newCity: "",
    City: "",
    country: "",
    condition: "",
    temp: "",
    humidity: "",
    image: "",
    searchValu: [],
    text: ""
  };

  onChangeHandler(event) {
    this.setState({ text: event.target.value });
    this.autoCompleteText(event);
  }

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
        condition: data.current.condition.text,
        text: "",
        placeholder: this.state.text
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
        searchValu: data,
        newCity: search
      });
    }
  };

  SearchListHandle(event) {
    this.setState({
      newcityFullname: event.target.getAttribute("data-itemid"),
      text: event.target.getAttribute("data-itemid"),
      searchValu: []
    });
    this.getWeatherInfo(event);
  }

  render() {
    return (
      <div>
        <SearchForm
          state={this.state}
          getWeatherInfo={this.getWeatherInfo.bind(this)}
          onChangeHandler={this.onChangeHandler.bind(this)}
          SearchListHandle={this.SearchListHandle.bind(this)}
        />
        <LocationDetail state={this.state} />
        <div />
      </div>
    );
  }
}

export default App;

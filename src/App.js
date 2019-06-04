import React, { Component } from "react";
import SearchForm from "./component/searchForm/SearchForm";
import LocationDetail from "./component/LocationDetail/LocationDetail";

class App extends Component {
  state = {
    firstRun: true,
    placeholder: "enter city",
    newCity: "tehran",
    City: "",
    date: "",
    country: "",
    condition: "",
    temp: "",
    forecastDay: [],
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
        `https://api.apixu.com/v1/forecast.json?key=1652ea732ca848b7bd6100429192205&q=${
          this.state.newCity
        }&days=6`
      );
      const data = await api.json();
      this.setState({
        City: data.location.name,
        country: data.location.country,
        date: data.location.localtime,
        temp: data.current.temp_c,
        image: data.current.condition.icon,
        condition: data.current.condition.text,
        text: "",
        placeholder: this.state.text,
        forecastDay: data.forecast.forecastday
      });
      console.log(this.state.forecastDay);
    }
  };

  autoCompleteText = async e => {
    const search = e.target.value;
    const url = await fetch(
      `https://api.apixu.com/v1/search.json?key=1652ea732ca848b7bd6100429192205&q=${search}`
    );
    var data = await url.json();

    if (search.length >= 3) {
      this.setState({
        searchValu: data,

        newCity: search
      });
    } else {
      this.setState({
        searchValu: []
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
      <div className="navbar">
        <div>
          <SearchForm
            state={this.state}
            getWeatherInfo={this.getWeatherInfo.bind(this)}
            onChangeHandler={this.onChangeHandler.bind(this)}
            SearchListHandle={this.SearchListHandle.bind(this)}
          />
        </div>

        <LocationDetail state={this.state} forcast={this.state.forecastDay} />
      </div>
    );
  }
}

export default App;

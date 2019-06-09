import React, { Component } from "react";
import SearchForm from "../searchForm/SearchForm";
import "./ChangeLocation.css";
import { Link } from "react-router-dom";

class ChangeLocation extends Component {
  state = {
    newcityFullname: "",
    newCity: "",
    placeholder: "",
    searchValu: [],
    list: []
  };

  onChangeHandler(event) {
    this.setState({ text: event.target.value });
    this.autoCompleteText(event);
  }

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
        newCity: "",
        placeholder: this.state.text,
        text: "",
        list: [
          ...this.state.list,
          {
            city: data.location.name,
            country: data.location.country,
            temp: data.current.temp_c,
            icon: data.current.condition.icon,
            fullname: this.state.text
          }
        ]
      });
      console.log(this.state.list);
    }
  };

  render() {
    return (
      <div>
        <div>
          <SearchForm
            state={this.state}
            getWeatherInfo={this.getWeatherInfo.bind(this)}
            onChangeHandler={this.onChangeHandler.bind(this)}
            SearchListHandle={this.SearchListHandle.bind(this)}
          />
        </div>
        <div>
          <ul className="search-list">
            {this.state.list.map((item, index) => (
              <Link to={`/home/${item.fullname}`}>
                <li key={index}>
                  <p>{item.city}</p>
                  <p>{item.country}</p>
                  <p>{item.temp}</p>
                  <img src={item.icon} />
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ChangeLocation;

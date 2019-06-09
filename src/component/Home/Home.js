import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
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
    text: "",
    isDay: 0,
    humidity: "",
    feelslike: "",
    wind: ""
  };

  componentDidMount = async e => {
    if (this.state.newCity !== "") {
      const api = await fetch(
        `https://api.apixu.com/v1/forecast.json?key=1652ea732ca848b7bd6100429192205&q=${
          this.props.name
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
        isDay: data.current.isDay,
        humidity: data.current.humidity,
        feelslike: data.current.feelslike_c,
        forecastDay: data.forecast.forecastday,
        wind: data.current.wind_kph
      });
      console.log(this.props.name);
    }
  };

  render() {
    return (
      <div className="body">
        <div className="base">
          <div className="location">
            {this.state.City},{this.state.country}
          </div>
          <div className="temp">
            <p className="tempc">{this.state.temp}</p>
            <p className="discription">{this.state.condition}</p>
          </div>
        </div>
        <div className="forcast-detail">
          <div className="forcast">
            <p>Forecast</p>
            <ul className="ul">
              {this.state.forecastDay.slice(0, 5).map((item, index) => (
                <li key={index}>
                  <div className="forcast-list">
                    <p className="date">{item.date}</p>
                    <img
                      className="icon"
                      src={item.day.condition.icon}
                      alt=""
                    />
                  </div>
                  <p className="list-gap" />
                </li>
              ))}
            </ul>
          </div>
          <div className="detail">
            <img className="currentIcon" src={this.state.image} alt="icon" />
            <p className="list-gap" />
            <p>Feels like : {this.state.feelslike} c</p>
            <p className="list-gap" />
            <p>humidity : {this.state.humidity} %</p>
            <p className="list-gap" />
            <p>Wind speed : {this.state.feelslike} kmh</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

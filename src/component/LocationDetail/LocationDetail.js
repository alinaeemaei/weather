import React, { Component } from "react";
import "./LocationDetail.css";
import { Link } from "react-router-dom";
import { from } from "rxjs";
import GetAPI from "../Home/GetAPI";

class LocationDetail extends Component {
  render() {
    return (
      <div className="locationDetail">
        <h1>
          <GetAPI />
        </h1>
        <div className="details">
          <div className="detail">
            <p className="location">
              {this.props.state.City},{this.props.state.country}
            </p>
            <p className="condition">{this.props.state.condition}</p>
          </div>
          <div className="temp">
            <p>{this.props.state.temp}</p>
          </div>
        </div>
        <div className="forcast">
          <ul className="forcastUl">
            {this.props.forcast.map((item, index) => (
              <li key={index}>
                <p>{item.date}</p>
                <img src={item.day.condition.icon} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default LocationDetail;

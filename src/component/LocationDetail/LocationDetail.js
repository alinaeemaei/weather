import React from "react";
import "./LocationDetail.css";

const LocationDetail = props => {
  return (
    <div className="locationDetail">
      <h5>city: {props.state.City}</h5>
      <h5>country: {props.state.country}</h5>
      <h5>condition: {props.state.con}</h5>
      <h5>temp: {props.state.temp}</h5>
      <h5>humidity: {props.state.humidity}</h5>
      <img src={props.state.image} alt="" />
    </div>
  );
};
export default LocationDetail;

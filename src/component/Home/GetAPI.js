import React from "react";
import Home from "./Home";

function GetAPI({ match }) {
  console.log(match);
  return <Home name={match.params.name} />;
}
export default GetAPI;

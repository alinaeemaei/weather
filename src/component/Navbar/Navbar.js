import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const navStayle = {
    color: "white"
  };
  return (
    <nav>
      <Link to="/" className="link">
        <h2>Weather</h2>
      </Link>
      <ul className="nav-link">
        <Link to="/name" className="link">
          <li>Change Location</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

const ERROR = () => {
  return (
    <div className="firstChild">
      <div className="error">
        <h1 id="colorful-heading">
          <span class="red-text">Red</span>
          <span class="blue-text">Blue</span>
          <span class="green-text">Green</span>
        </h1>
        <h3>SORRY! PAGE NOT FOUND</h3>
        <p>
          Oops! It seems like the page you're trying to access doesn't exist. If you believe there's an issue, feel free to report it, and we'll look into it.
        </p>
        <div className="btns">
          <NavLink to="/">Return home</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
        </div>
      </div>
    </div>
  );
};

export default ERROR;

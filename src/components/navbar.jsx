import React, { Component } from "react";

//Stateless functional component

//Object Destructing (Props is automatically passed and we are destructuring to get just totalCounters for easier readibility)
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

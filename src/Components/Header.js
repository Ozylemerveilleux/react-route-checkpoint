import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <h1>Movie Card</h1>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/Home">
                <h3> Home </h3>
              </Link>
            </li>
            <li>
              <Link to="/MovieList">
                <h3> MovieList </h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};


export default Header;
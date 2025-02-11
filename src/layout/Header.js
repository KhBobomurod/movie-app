import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div className="header__nav">
          <a href="#!" className="brand__logo">
            Creative Movie App
          </a>
          <ul>
            <li>
              <a href="#!">Movies</a>
            </li>
            <li>
              <a href="#!">Serials</a>
            </li>
            <li>
              <a href="#!">Logout</a>
            </li>
          </ul>
        </div>

        <div className="main-head">
          <a href="#!">
            <img
              src="https://www.freeiconspng.com/uploads/play-button-icon-png-15.png"
              alt=""
            />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;

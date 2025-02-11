import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="main-foot">
          <a href="#!">
            <img
              src="https://www.freeiconspng.com/uploads/play-button-icon-png-15.png"
              alt=""
            />
          </a>
        </div>
        <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">
              <h3>&copy; {new Date().getFullYear()} Copyright Reserved </h3>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

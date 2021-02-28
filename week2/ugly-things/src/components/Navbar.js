import { React, Component } from "react";
export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div id="navBox">
        <button className="navBtn">
          <a className="navLink" href="localhost:3000">
            Home
          </a>
        </button>
        <button className="navBtn">
          <a className="navLink" href="localhost:3000">
            Services
          </a>
        </button>
        <button className="navBtn">
          <a className="navLink" href="localhost:3000">
            About Us
          </a>
        </button>
        <button className="navBtn">
          <a className="navLink" href="localhost:3000">
            Careers
          </a>
        </button>
        <button className="navBtn">
          <a className="navLink" href="localhost:3000">
            Contact Us
          </a>
        </button>
      </div>
    );
  }
}

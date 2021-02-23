import { React, Component } from "react";
export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div id="navBox">
        <button href="#"className="navBtn">Home</button>
        <button href="#"className="navBtn">Services</button>
        <button href="#"className="navBtn">About Us</button>
        <button href="#"className="navBtn">Careers</button>
        <button href="#"className="navBtn">Contact Us</button>
      </div>
    );
  }
}

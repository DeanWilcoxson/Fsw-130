import React from "react";
import { ThemeContext } from "./ThemeContext";
class Navbar extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <div className="navbar">
            <button className={`${theme}-theme`}>Home</button>
            <button className={`${theme}-theme`}>About</button>
            <button className={`${theme}-theme`}>Contact Us</button>
            <button className={`${theme}-theme`}>Services</button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Navbar;

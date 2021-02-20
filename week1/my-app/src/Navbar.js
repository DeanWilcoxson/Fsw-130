import React from "react";
import { ThemeContext } from "./ThemeContext";
class Navbar extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <div className="navbar">
            <button style={theme.theme}>Home</button>
            <button style={theme.theme}>About</button>
            <button style={theme.theme}>Contact Us</button>
            <button style={theme.theme}>Services</button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Navbar;

import React from "react";
import { ThemeContext } from "./ThemeContext";
class Header extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => {
          console.log(theme, "header line 8")
          return (
          <header style={theme.theme}>
            <h2>{theme.theme.color === "#ffffff" ? "Dark": "Light" } Theme</h2>
          </header>
        )}}
      </ThemeContext.Consumer>
    );
  }
}
export default Header;
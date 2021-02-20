import React from "react";
import { ThemeContext } from "./ThemeContext";
class Button extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <div id="switchButton">
            <button style={theme} onClick={toggleTheme}>
              Toggle Theme
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Button;

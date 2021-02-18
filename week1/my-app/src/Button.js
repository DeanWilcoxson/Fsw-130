import React from "react";
import ThemeContext from "./ThemeContext";
class Button extends React.Component {
  constructor() {
    super();
    this.context = {};
  }
  handleChange = (e) => {};

  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <div id="switchButton">
            <button className={`${theme}-theme`} onClick={this.handleChange}>
              Switch Theme
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Button;

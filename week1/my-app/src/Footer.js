import React from "react";
import { ThemeContext } from "./ThemeContext";
class Footer extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (       
          <footer style={theme.theme}>
            <h2>&copy; 2021 WebDev Student (Dean Wilcoxson)</h2>
          </footer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Footer;

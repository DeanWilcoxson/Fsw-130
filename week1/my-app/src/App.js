import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
import Navbar from "./Navbar";
import ThemeContext from "./ThemeContext";

class App extends React.Component {
  static contextType = ThemeContext;
  render() {
    const theme = this.context;
    return (
      <div>
        <Header theme={theme} />
        <Navbar theme={theme} />
        <Button theme={theme} />
        <Footer theme={theme} />
      </div>
    );
  }
}

export default App;

// <ThemeContext.Consumer>
//   {(theme) => <Header theme={theme} />}
// </ThemeContext.Consumer>

// <ThemeContext.Consumer>
//   {(theme) => <Navbar theme={theme} />}
// </ThemeContext.Consumer>

// <ThemeContext.Consumer>
//   {(theme) => <Button theme={theme} />}
// </ThemeContext.Consumer>

// <ThemeContext.Consumer>
//     {(theme) => <Footer theme={theme} />}
// </ThemeContext.Consumer>

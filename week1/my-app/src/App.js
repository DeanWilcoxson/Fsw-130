import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
import Navbar from "./Navbar";
import "./Styles.css";
import { themes } from "./ThemeContext";
class App extends React.Component {
  //from reactjs.org
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     theme: themes.light,
  //     toggleTheme: this.toggleTheme,
  //   };
  //   this.toggleTheme = () => {
  //     this.setState((state) => ({
  //       theme: state.theme === themes.dark ? themes.light : themes.dark,
  //     }));
  //   };
  // }
  // static contextType = ThemeContext;
  render() {
    // const theme = this.context
    return (
      <div>
        <Header theme={themes} />
        <Navbar theme={themes} />
        <Button theme={themes} />
        <Footer theme={themes} />
      </div>
    );
  }
}
export default App;
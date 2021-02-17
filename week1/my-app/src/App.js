import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
import Navbar from "./Navbar";
import ThemeContext from "./ThemeContext";

function App() {
  return (
    <div>
      <ThemeContext.Consumer>
        {(theme) => <Header theme={theme} />}
      </ThemeContext.Consumer>

      <ThemeContext.Consumer>
        {(theme) => <Navbar theme={theme} />}
      </ThemeContext.Consumer>

      <ThemeContext.Consumer>
        {(theme) => <Button theme={theme} />}
      </ThemeContext.Consumer>

      <ThemeContext.Consumer>
        {(theme) => <Footer theme={theme} />}
      </ThemeContext.Consumer>
    </div>
  );
}

export default App;

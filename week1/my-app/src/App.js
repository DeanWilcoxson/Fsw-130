import { React, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";
import Navbar from "./Navbar";
import "./Styles.css";
import { ThemeContext, themes } from "./ThemeContext";
// class App extends React.Component {
//   // from reactjs.org
//   constructor(props) {
//     super(props);
//     this.state = {
//       theme: themes.light,
//       toggleTheme: this.toggleTheme,
//     };
//     this.toggleTheme = () => {
//       this.setState((state) => ({
//         theme: state.theme === themes.dark ? themes.light : themes.dark,
//       }));
//     };
//   }
//   // static contextType = ThemeContext;
//   render() {
//     console.log(themes);
// const theme = this.context
function App() {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    setTheme((state) =>
      state === themes.dark ? themes.light : themes.dark
    );
  };
  return (
    <div>
      <ThemeContext.Provider
        value={{
          // theme: this.state.theme,
          // toggleTheme: this.toggleTheme,
          theme: theme,
          toggleTheme: toggleTheme,
        }}
      >
        <Header />
        <Navbar />
        <Button />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
  // }
}
export default App;

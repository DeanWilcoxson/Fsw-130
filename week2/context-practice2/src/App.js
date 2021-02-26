import { React, Component } from "react";
import Form from "./Components/Form";
import Data from "./Components/Data";
import "./Styles.css";
import ContextProvider from "./Context";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
      
    };
  }
  render() {
    return (
      <div>
        <ContextProvider>
          <Form />
          <Data />
        </ContextProvider>
      </div>
    );
  }
}

import { React, Component } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import List from "./components/List";
import "./Styles.css";
import Context from "./Context";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Context>
        <Navbar />
        <Form />
        <List />
      </Context>
    );
  }
}

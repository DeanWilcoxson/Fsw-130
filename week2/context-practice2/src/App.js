import { React, Component } from "react";
import Form from "./Form";
import Data from "./Data";
import { ContextConsumer } from "./Context";
import './Styles.css'
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }
  render() {
    return (
      <div>
        <ContextConsumer>
          {({ movies }) => (
            <div>
              <Form />
              <Data />
            </div>
          )}
        </ContextConsumer>
      </div>
    );
  }
}

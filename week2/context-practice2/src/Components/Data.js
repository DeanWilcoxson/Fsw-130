import { React, Component } from "react";
import { ContextConsumer } from "../Context";
export default class Data extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <ContextConsumer>
        {({ state }) => (
          <div id="listItem">
            {state.movies.map((movie) => {
              return (
                <div key={movie.id}>
                  <h2 id="movieTitle">{movie.title}</h2>
                  <h3>{movie.actor}</h3>
                </div>
              );
            })}
          </div>
        )}
      </ContextConsumer>
    );
  }
}

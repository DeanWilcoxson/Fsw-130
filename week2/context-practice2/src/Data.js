import { React, Component } from "react";
import { ContextConsumer } from "./Context";
export default class Data extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <ContextConsumer>
          {({ movies }) => (
            <div>
              {movies.map((movie) => {
                return (
                  <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <ol id="actorList">
                      <b>Actor/ Actress: </b>
                      {movie.actors.map((x) => {
                        return (
                          <li key={x.id} id="actor">
                            {x.name}
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                );
              })}
            </div>
          )}
        </ContextConsumer>
      </div>
    );
  }
}

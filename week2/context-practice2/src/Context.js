import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();
export default class ContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          id: "5",
          title: "Joker",
          actors: [
            { id: "1", name: "Joaquin Phoenix" },
            { id: "2", name: "Robert De Niro" },
            { id: "3", name: "Zazie Beetz" },
            { id: "4", name: "Frances Conroy" },
            { id: "5", name: "Brett Cullen" },
          ],
        },
        {
          id: "1",
          title: "Star Wars",
          actors: [
            { id: "1", name: "Mark Hamill" },
            { id: "2", name: "Harrison Ford" },
            { id: "3", name: "Carrie Fisher" },
            { id: "4", name: "Anthony Daniels" },
            { id: "5", name: "Kenny Baker" },
          ],
        },
        {
          id: "2",
          title: "Avengers",
          actors: [
            { id: "1", name: "Robert Downey Jr" },
            { id: "2", name: "Chris Evans" },
            { id: "3", name: "Mark Ruffalo" },
            { id: "4", name: "Jeremy Renner" },
            { id: "5", name: "Chris Hemsworth" },
          ],
        },
        {
          id: "3",
          title: "Pulp Fiction",
          actors: [
            { id: "1", name: "Bruce Willis" },
            { id: "2", name: "Tim Roth" },
            { id: "3", name: "Samuel L. Jackson" },
            { id: "4", name: "John Travolta" },
            { id: "5", name: "Uma Thurman" },
          ],
        },
        {
          id: "4",
          title: "Reservoir Dogs",
          actors: [
            { id: "1", name: "Harvey Keitel" },
            { id: "2", name: "Michael Madsen" },
            { id: "3", name: "Tim Roth" },
            { id: "4", name: "Steve Buscemi" },
            { id: "5", name: "Quentin Tarantino" },
          ],
        },
        {
          id: "6",
          title: "X-men: Days of Future Past",
          actors: [
            { id: "1", name: "Hugh Jackman" },
            { id: "2", name: "James McAvoy" },
            { id: "3", name: "Michael Fassbender" },
            { id: "4", name: "Halle Berry" },
            { id: "5", name: "Peter Dinklage" },
          ],
        },
      ],
    };
  }
  
  render() {
    const moviesContext = this.state;
    return (
      <Provider value={moviesContext}>
        {this.props.children}
      </Provider>
    );
  }
}
export { Consumer as ContextConsumer };

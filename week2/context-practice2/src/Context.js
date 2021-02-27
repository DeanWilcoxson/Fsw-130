import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();
let count = 0;
export default class ContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          id: count++,
          title: "Joker",
          actor: "Joaquin Phoenix",
        },
        {
          id: count++,
          title: "Star Wars",
          actor: "Mark Hamill",
        },
        {
          id: count++,
          title: "Avengers",
          actor: "Robert Downey Jr",
        },
        {
          id: count++,
          title: "Pulp Fiction",
          actor: "Samuel L. Jackson",
        },
        {
          id: count++,
          title: "Reservoir Dogs",
          actor: "Harvey Keitel",
        },
        {
          id: count++,
          title: "X-men: Days of Future Past",
          actor: "Hugh Jackman",
        },
      ],
      title: "",
      actor: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    console.log(e.target);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleClick(e) {
    console.log(e.target);

    e.preventDefault();
    let newObj = {
      id: count++,
      title: this.state.title,
      actor: this.state.actor,
    };
    var newMovies = this.state.movies;
    newMovies.push(newObj)
    this.setState(prevState => ({ movies: newMovies}))
    
  }

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          change: this.handleChange,
          click: this.handleClick,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
export { Consumer as ContextConsumer };

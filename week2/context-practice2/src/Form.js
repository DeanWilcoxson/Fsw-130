import { React, Component } from "react";
export default class Form extends Component {
  render() {
    return (
      <div>
        <form id="form">
          <input id="title" name="title" onChange={handleChange}type="text" placeholder="Movie Title" />
          <input id="actorName" name="actor" onChange={handleChange}type="text" placeholder="Actor/Actress Name" />
          <button id="addBtn">Add Movie</button>
        </form>
      </div>
    );
  }
}

import { React, Component } from "react";
export default class Form extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <form id="form" >
          <input id="title"  type="text" placeholder="Movie Title" />
          <input  id="actorName" type="text" placeholder="Actor/Actress Name" />
          <button id="addBtn" >Add Movie</button>
        </form>
      </div>
    );
  }
}

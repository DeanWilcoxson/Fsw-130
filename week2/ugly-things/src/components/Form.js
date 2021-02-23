import { React, Component } from "react";
export default class Form extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div id="formDiv">
        <hr />
        <form id="form" /* onSubmit={""} */>
          <h1 id="ugly">UGLY</h1>
          <h1 id="things">THINGS</h1>
          <input
            id="title"
            type="text"
            name=""
            placeholder="Title"
            // onChange={""}
          />
          <textarea
            id="desc"
            type="text"
            name=""
            placeholder="Description"
            // onChange={""}
          />
          <input
            id="url"
            type="url"
            name=""
            placeholder="Image url"
            // onChange={""}
          />
          <button id="formButton" name="">
            <b id="formButtonText">Post Something Ugly</b>
          </button>
        </form>
        <hr />
      </div>
    );
  }
}

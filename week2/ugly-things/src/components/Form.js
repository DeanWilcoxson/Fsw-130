import { React, Component } from "react";
import { ContextConsumer } from "../Context";
export default class Form extends Component {
  render() {
    return (
      <ContextConsumer>
        {(context) => (
          <div id="formDiv">
            <hr />
            <form id="form" onSubmit={context.add}>
              <h1 id="ugly">UGLY</h1>
              <h1 id="things">THINGS</h1>
              <input
                id="title"
                value={context.title}
                type="text"
                name="title"
                placeholder="Title"
                onChange={context.change}
              />
              <textarea
                id="desc"
                value={context.description}
                type="text"
                name="description"
                placeholder="Description"
                onChange={context.change}
              />
              <input
                id="url"
                value={context.url}
                type="url"
                name="url"
                placeholder="Image url"
                onChange={context.change}
              />
              <button id="formButton">
                <b id="formButtonText">Post Something Ugly</b>
              </button>
            </form>
            <hr />
          </div>
        )}
      </ContextConsumer>
    );
  }
}

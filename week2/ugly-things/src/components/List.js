import React, { Component } from "react";
import { ContextConsumer } from "./../Context";
export default class List extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <ContextConsumer>
        {(context) => {
          return (
            <div id="uglyBox">
              {context.uglyThings.map((x) => {
                return (
                  <div
                    className="uglyThing"
                    style={{ backgroundImage: x.url }}
                    key={x.url}
                  >
                    <h1 id="titleId">{x.title}</h1>
                    <h3 id="descId">{x.description}</h3>
                    <img id="imgId" src={x.url} alt="catphoto.jpeg" />
                    <button id="editBtn" onClick={context.edit}>
                      Edit
                    </button>
                    <button id="delBtn" onClick={context.del}>
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
          );
        }}
      </ContextConsumer>
    );
  }
}

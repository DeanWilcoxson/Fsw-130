import React, { Component } from "react";
import { ContextConsumer } from "./../Context";

export default class Comments extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <ContextConsumer>
          {(context) => {
            <div>
              {context.comment.map((y) => {
                return (
                  <div key={y.id}>
                    <p className="comments">
                      {y.text}
                      <button onClick={context.comDel} id="commentDelBtn">
                        Delete Comment
                      </button>
                    </p>
                  </div>
                );
              })}
            </div>;
          }}
        </ContextConsumer>
      </div>
    );
  }
}

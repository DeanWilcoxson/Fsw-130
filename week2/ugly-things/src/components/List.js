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
                  <div className="uglyThing" key={x.url}>
                    <h1 id="titleId">{x.title}</h1>
                    <h3 id="descId">{x.description}</h3>
                    <img id="imgId" src={x.url} alt="catphoto.jpeg" />
                    <span>
                      <button id="editBtn" onClick={context.edit}>
                        Edit
                      </button>
                      <button id="delBtn" onClick={context.del}>
                        Delete
                      </button>
                      <button onClick={context.comAdd} id="commentAddBtn">
                        Add Comment
                      </button>
                    </span>
                    <input
                      className="comment"
                      name="comment"
                      value={context.comment}
                      onChange={context.change}
                      placeholder="Comment Here"
                    ></input>
                    <div>
                      {x.comments.map((y) => {
                        return (
                          <div key={y.id}>
                            <p className="comments">
                              {y.text}
                              <button
                                onClick={context.comDel}
                                id="commentDelBtn"
                              >
                                Delete Comment
                              </button>
                            </p>
                          </div>
                        );
                      })}
                    </div>
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

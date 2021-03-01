import React, { Component } from "react";
import { ContextConsumer } from "./../Context";
export default class List extends Component {
  render() {
    return (
      <ContextConsumer>
        {(context) => {
          return (
            <div id="uglyBox">
              {context.uglyThings.map((x) => {
                return (
                  <div className="uglyThing" key={x.id}>
                    <h1 id="titleId">{x.title}</h1>
                    <h3 id="descId">{x.description}</h3>
                    <img id="imgId" src={x.url} alt="catphoto.jpeg" />
                    <span className="buttonGrid">
                      <button id="editBtn" onClick={context.edit}>
                        Edit Post
                      </button>
                      <button id="delBtn" onClick={context.del}>
                        Delete Post
                      </button>
                    </span>
                    <form className="commentGrid">
                      <input
                        className="comment"
                        name="comment"
                        value={context.comment.text}
                        onChange={context.change}
                        placeholder="Comment Here"
                      ></input>
                      <button onClick={context.comAdd} id="commentAddBtn">
                        Add Comment
                      </button>
                    </form>
                    <div>
                      if (x.comments.text !== "")
                      {x.comments.map((y) => {
                        return (
                          <p key={y.id} className="comments">
                            {y.text}
                            <button onClick={context.comDel} id="commentDelBtn">
                              Delete Comment
                            </button>
                          </p>
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

import React, { Component } from "react";
import { ContextConsumer } from "./../Context";
import EditForm from "./editForm";
export default class List extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
    };
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.submitEdits = this.submitEdits.bind(this);
  }

  toggleEditForm() {
    this.setState((prevState) => ({
      editing: true,
    }));
  }

  submitEdits(e, submitting) {
    e.preventDefault();
    console.log("submit button works")
    submitting(e);
    this.setState((prevState) => ({
      editing: false,
    }));
  }

  render() {
    return (
      <ContextConsumer>
        {(context) => {
          return (
            <div id="uglyBox">
              {context.uglyThings.map((x) => {
                return (
                  <div className="uglyThing" key={x.id}>
                    {this.state.editing ? (
                      <EditForm
                        editing={(e) => this.submitEdits(e, context.edit)}
                      />
                    ) : (
                      <>
                        <h1 id="titleId">{x.title}</h1>
                        <h3 id="descId">{x.description}</h3>
                        <img id="imgId" src={x.url} alt="catphoto.jpeg" />
                      </>
                    )}
                    <span className="buttonGrid">
                      <button id="editBtn" onClick={this.toggleEditForm}>
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
                      {x.comments.map((y) => {
                        if (y.text) {
                          return (
                            <p key={y.id} className="comments">
                              {y.text}
                              <button
                                onClick={context.comDel}
                                id="commentDelBtn"
                              >
                                Delete Comment
                              </button>
                            </p>
                          );
                        }
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

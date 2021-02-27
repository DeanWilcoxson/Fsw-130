import { React, Component } from "react";
import { ContextConsumer } from "../Context";
export default class Form extends Component {
  constructor(){
    super()
    this.state = {}
  }
  // handleChange = (e) => {
 
  // };
  // handleClick = (e) => {

  // };
  render() {
    return (
      <ContextConsumer>
        {(addItem) => (
          <div>
            <form id="form">
              <input
                id="title"
                name="title"
                value={addItem.state.title}
                type="text"
                placeholder="Movie Title"
                onChange={addItem.change}
              />
              <input
                id="actorName"
                name="actor"
                value={addItem.state.actor}
                type="text"
                placeholder="Actor/Actress Name"
                onChange={addItem.change}
              />
              <button 
              id="addBtn" 
              name="addBtn" 
              onClick={addItem.click}>
                Add Movie
              </button>
            </form>
          </div>
        )}
      </ContextConsumer>
    );
  }
}

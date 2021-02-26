import { React, Component } from "react";
// import { ContextConsumer } from "../Context";
export default class Form extends Component {
  constructor(props){
    // console.log(props)
    super(props)
    this.state = props.state
  }
  
  
  render() {
    return (
      // <ContextConsumer>
      //   {(addItem) => (
          <div>
            <form id="form">
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Movie Title"
                onChange={this.handleChange}
              />
              <input
                id="actorName"
                name="actor"
                type="text"
                placeholder="Actor/Actress Name"
                onChange={this.handleChange}
              />
              <button 
              id="addBtn" 
              name="addBtn" 
              onClick={this.handleClick}>
                Add Movie
              </button>
            </form>
          </div>
      //   )}
      // </ContextConsumer>
    );
  }
}

import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();
let count = 0;
let commentCount = 0;
export default class Context extends Component {
  constructor() {
    super();
    this.state = {
      uglyThings: [
        {
          comments: [
            { id: commentCount++, text: "Covid should be taken seriously" },
          ],
          id: count++,
          title: "Ugliest Thing",
          description: "Hmmm.. I wonder why?",
          url:
            "https://images.unsplash.com/photo-1599011802525-cc9bc1a34c4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTgwOTN8MHwxfHNlYXJjaHw1fHxkaXNndXN0aW5nfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
        },
        {
          comments: [{ id: commentCount++, text: "Trash is gross" }],
          id: count++,
          title: "Disgusting..",
          description: "Litter bugs be littering.",
          url:
            "https://images.unsplash.com/photo-1613145654877-9305c4271736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTgwOTN8MHwxfHNlYXJjaHw0fHxkaXNndXN0aW5nfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
        },
        {
          comments: [{ id: commentCount++, text: "AHH, I hate Spiders!!" }],
          id: count++,
          title: "Eww!!!",
          description: "Ugly Ass Spider..",
          url:
            "https://images.unsplash.com/photo-1589490727331-cbe42fbd52fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTgwOTN8MHwxfHNlYXJjaHw2fHx1Z2x5JTIwc3BpZGVyc3xlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080",
        },
      ],
      title: "",
      description: "",
      url: "",
      comments: [{ id: "", text: "" }],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleClick(e) {
    e.preventDefault();
    let newObject = {
      id: count++,
      title: this.state.title,
      description: this.state.description,
      url: this.state.url,
      comments: [],
    };
    var newUglyThings = this.state.uglyThings;
    newUglyThings.push(newObject);
    this.setState((prevState) => ({
      uglyThings: newUglyThings,
      title: "",
      description: "",
      url: "",
      comments: [{ id: "", text: "" }],
    }));
  }

  handleEdit(e) {
    this.setState((prevState) => ({
      uglyThings: prevState.uglyThings.map((x) => {
        if (x.id === Number(e.target.parentNode.parentNode.id)) {
          if (prevState.title.length) {
            x.title = prevState.title;
          }

           if (prevState.description.length) {
            x.description = prevState.description;
          }
          
           if (prevState.url.length) {
            x.url = prevState.url;
          }
          return x;
        } else {
          return x;
        }
      }),
    }));
  }

  handleDelete(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      uglyThings: prevState.uglyThings.filter((x) => {
        return x.id !== Number(e.target.parentNode.parentNode.id);
      }),
    }));
  }

  handleCommentAdd(e) {
    e.preventDefault();
  }

  handleCommentDelete(e) {
    e.preventDefault();
    let editThing = e.target;
    console.log(editThing);
    // editThing.remove()
  }

  render() {
    return (
      <Provider
        value={{
          uglyThings: this.state.uglyThings,
          change: this.handleChange,
          add: this.handleClick,
          edit: this.handleEdit,
          del: this.handleDelete,
          comment: this.state.comments,
          comDel: this.handleCommentDelete,
          comAdd: this.handleCommentAdd,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
export { Consumer as ContextConsumer };

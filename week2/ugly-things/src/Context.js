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
          comments: [{ id: commentCount++, text: "Covid should be taken seriously" }],
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
      comment: "",
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
    };
    var newUglyThings = this.state.uglyThings;
    newUglyThings.push(newObject);
    this.setState((prevState) => ({
      uglyThings: newUglyThings,
    }));
  }
  handleCommentAdd() {}
  handleEdit(e) {}

  handleDelete() {}

  handleCommentDelete() {}

  render() {
    return (
      <Provider
        value={{
          comment: this.state.comment,
          uglyThings: this.state.uglyThings,
          add: this.handleClick,
          del: this.handleDelete,
          change: this.handleChange,
          edit: this.handleEdit,
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

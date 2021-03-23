import React from "react";
export default function Form(props) {
  const { addUser } = props;
  return (
    <div id="formDiv">
      {console.log(addUser)}
      <form id="form" onSubmit={addUser}>
        <input
          className="input"
          id="name"
          type="text"
          placeholder="Name: 'John Doe'"
          //   value={}
          //   onChange={}
        ></input>
        <input
          className="input"
          id="number"
          type="number"
          placeholder="Number: '1(209)-123-4567'"
          //   value={}
          //   onChange={}
        ></input>
        <button id="saveContact">Save Contact</button>
      </form>
    </div>
  );
}

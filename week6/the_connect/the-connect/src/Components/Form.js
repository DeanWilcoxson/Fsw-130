import React from "react";
export default function Form(props) {
  const { addUser } = props;
  return (
    <div id="formDiv">
      <form id="form">
        <input
          className="input"
          id="name"
          type="text"
          placeholder="Name"
        ></input>
        <input
          className="input"
          id="number"
          type="number"
          placeholder="Number"
        ></input>
        <button id="saveContact" onClick={addUser}>
          Save Contact{console.log(addUser)}
        </button>
      </form>
    </div>
  );
}
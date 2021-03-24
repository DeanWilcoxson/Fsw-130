import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

export default function Form(props) {
  const { addUser } = props;
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name");
    const number = document.getElementById("number");
    dispatch(addUser({ name: name.value, number: number.value, id: uuidv4() }));
  }

  return (
    <div id="formDiv">
      <form id="form" onSubmit={onSubmit}>
        <input
          name="name"
          className="input"
          id="name"
          type="text"
          placeholder="Name: 'John Doe'"
          required
        ></input>
        <input
          name="number"
          className="input"
          id="number"
          type="number"
          placeholder="Number: '1(209)-123-4567'"
          required
        ></input>
        <button id="saveContact">Save Contact</button>
      </form>
    </div>
  );
}

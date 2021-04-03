import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
export default function Form(props) {
  const dispatch = useDispatch();
  const { add } = props;
  console.log(props);
  function onSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("charInput");
    const url = document.getElementById("charUrl");
    dispatch(add({ name: name.value, img: url.value, id: uuidv4() }));
  }
  return (
    <form className="charForm" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Character"
        id="charInput"
        name="name"
        className="charInput"
        required
      ></input>
      <input
        type="url"
        placeholder="Image Url"
        id="charUrl"
        name="url"
        className="charUrl"
        required
      ></input>
      <button className="addBtn">Add Character</button>
    </form>
  );
}

import React from "react";
export default function Form(props) {
  const { add } = props;
  return (
    <form id="tvForm">
      <input id="titleInput"></input>
      <button onClick={add}>Add Movie</button>
    </form>
  );
}
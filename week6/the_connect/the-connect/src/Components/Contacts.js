import React from "react";
import { useDispatch } from "react-redux";

export default function Contacts(props) {
  const { name, number, id, delUser } = props;
  const dispatch = useDispatch();
  function onDelete(e) {
    e.preventDefault();
    const delBtns = document.getElementsByClassName("delBtn");
    console.log(e.target);
    dispatch(
      delUser(
        delBtns.map((x) => {
          return x.id === e.target.id;
        })
      )
    );
  }
  const phoneNum = `${number
    .toString()
    .replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}`;
  return (
    <div id="contactsDiv" key={id}>
      <span className="contact">
        {name} : {phoneNum}
      </span>
      <button onClick={onDelete} className="delBtn">
        Remove Contact
      </button>
    </div>
  );
}

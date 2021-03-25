import React from "react";
import { useDispatch } from "react-redux";

export default function Contacts(props) {
  const { name, number, id, delUser } = props;
  const dispatch = useDispatch();
  function onDelete(e) {
    e.preventDefault();
    console.log(e.target.parentNode.id);
    dispatch(
      delUser(
       e.target.parentNode
      )
    );
  }
  const phoneNum = `${number
    .toString()
    .replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}`;
  return (
    <div id={id} key={id} className="contactsDiv">
      <span className="contact">
        {name} : {phoneNum}
      </span>
      <button onClick={onDelete} className="delBtn">
        Remove Contact
      </button>
    </div>
  );
}

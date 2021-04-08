import React from "react";
import Header from "./Header";
import Form from "./Form";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Characters from "./Characters";
import { addRmChar, delRmChar, getRmChars } from "../../redux-state/rmReducer";

export default function RM(props) {
  const home = <FontAwesomeIcon icon={faHome} color="yellow" size="5x" />;
  const { del, state, add } = props;
  console.log("rm", props);
  return (
    <div>
      <div className="home">
        <button className="navBtn">
          <Link to="/" className="link">
            {home}
          </Link>
        </button>
      </div>
      <Header />
      <hr />
      <Form add={addRmChar} />
      <Characters del={del} state={state} />
    </div>
  );
}

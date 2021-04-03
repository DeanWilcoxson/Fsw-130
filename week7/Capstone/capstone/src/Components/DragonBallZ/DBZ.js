import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Form from "./Form";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Characters from "./Characters";
export default function DBZ(props) {
  const home = <FontAwesomeIcon icon={faHome} color="yellow" size="5x" />;
  const { del, state, add } = props;

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
      <Form add={add} />
      <Characters del={del} state={state} />
    </div>
  );
}

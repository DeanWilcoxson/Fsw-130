import React from "react";
import Header from "./Header";
import Form from "./Form";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Characters from "./Characters";

export default function RM(props) {
  const home = <FontAwesomeIcon icon={faHome} color="yellow" size="5x" />;
  const { delRm, state, addRm } = props;
  console.log(props);
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
      <Form addRm={addRm} />
      <Characters delRm={delRm} state={state} />
    </div>
  );
}

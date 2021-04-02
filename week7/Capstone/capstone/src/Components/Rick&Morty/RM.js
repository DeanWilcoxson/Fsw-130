import React from "react";
import Header from "./Header";
import Form from "./Form"
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function RM(props) {
  const home = <FontAwesomeIcon icon={faHome} color="green" size="5x" />;
  return (
    <div>
      <Header />
      <div className="home">
        <button className="navBtn">
          <Link to="/" className="link">
            {home}
          </Link>
        </button>
      </div>
      <Form/>
    </div>
  );
}

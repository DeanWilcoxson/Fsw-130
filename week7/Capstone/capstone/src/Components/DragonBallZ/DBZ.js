import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Form from "./Form"
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function DBZ(props) {
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

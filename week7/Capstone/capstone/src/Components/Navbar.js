import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="Navbar">
      <button className="navBtn">
        <Link to="/" className="link">
          Home
        </Link>
      </button>
      <button className="navBtn">
        <Link to="/RickAndMorty" className="link">
          Rick and Morty Characters
        </Link>
      </button>

      <button className="navBtn">
        <Link to="/StarWars" className="link">
          Star Wars Characters
        </Link>
      </button>

      <button className="navBtn">
        <Link to="/DragonBallZ" className="link">
          Dragon Ball Z Characters
        </Link>
      </button>
    </div>
  );
}

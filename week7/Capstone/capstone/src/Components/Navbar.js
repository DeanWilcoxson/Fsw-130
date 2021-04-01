import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/RickAndMorty" className="link">
        Rick and Morty Characters
      </Link>
      <Link to="/StarWars" className="link">
        Star Wars Characters
      </Link>
      <Link to="/DragonBallZ" className="link">
        Dragon Ball Z Characters
      </Link>
    </div>
  );
}

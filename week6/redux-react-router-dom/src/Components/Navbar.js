import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/movies" className="link">
        Movies
      </Link>
      <Link to="/tvshows" className="link">
        Tv Shows
      </Link>
    </div>
  );
}

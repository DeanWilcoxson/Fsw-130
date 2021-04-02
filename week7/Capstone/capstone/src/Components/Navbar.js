import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="imgNav">
      <button className="navBtn">
        <Link to="/RickAndMorty" className="link">
          <img
            src="https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg"
            alt="catPhoto.jpeg"
            width="300px"
            height="400px"
          ></img>
        </Link>
      </button>
      <button className="navBtn">
        <Link to="/StarWars" className="link">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcn9rzUplxjwLUomj6Xx317PO6H_6wJwAf4A&usqp=CAU"
            alt="birdPhoto.jpeg"
            width="300px"
            height="400px"
          ></img>
        </Link>
      </button>
      <button className="navBtn">
        <Link to="/DragonBallZ" className="link">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQARjrRsYHUpOzVKsPyYX_uFo6wp10M1-GgIg&usqp=CAU"
            alt="dogPhoto.jpeg"
            width="300px"
            height="400px"
          ></img>
        </Link>
      </button>
    </div>
  );
}

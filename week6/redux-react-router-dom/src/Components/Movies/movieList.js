import React from "react";
import Header from "./movieHeader";
import Form from "./movieForm";
import { useDispatch } from "react-redux";
export default function Movies(props) {
  const { add, /* get, */ state, del } = props;
  const dispatch = useDispatch();
  const movies = state.movies;
  function onDelete(e) {
    e.preventDefault();
    dispatch(del(e.target.parentNode));
  }
  return (
    <div>
      <Header />
      <Form add={add} />
      {movies.map((x) => {
        return (
          <div key={x.id} className="movie">
            <h1 className="movieTitle">{x.title}</h1>
            <button className="movieDelBtn" onClick={onDelete}>
              Delete Movie
            </button>
          </div>
        );
      })}
    </div>
  );
}

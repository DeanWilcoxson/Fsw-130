import React from "react";
import Header from "./showHeader";
import Form from "./showForm";
import { useDispatch } from "react-redux";
export default function TvShows(props) {
  const { add, /* get, */ state, del } = props;
  const dispatch = useDispatch();
  const shows = state.tvShows;
  function onDelete(e) {
    e.preventDefault();
    dispatch(del(e.target.parentNode));
    console.log(e.target.parentNode.id);
  }
  return (
    <div>
      <Header />
      <Form add={add} />
      {shows.map((x) => {
        return (
          <div key={x.id} className="show">
            <h1 className="showTitle">{x.title}</h1>
            <button className="showDelBtn" onClick={onDelete}>
              Delete Movie
            </button>
          </div>
        );
      })}
    </div>
  );
}

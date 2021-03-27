import React from "react";
import Header from "./showHeader";
import Form from "./showForm";
export default function TvShows(props) {
  console.log(props);
  const { add, /* get, */ state, del } = props;
  console.log(state.tvShows);
  return (
    <div>
      <Header />
      <Form add={add} />
      {state.tvShows.map((x) => {
        return (
          <div key={x.id}>
            <h1>{x.title}</h1>
            <button onClick={del}>Delete Movie</button>
          </div>
        );
      })}
    </div>
  );
}
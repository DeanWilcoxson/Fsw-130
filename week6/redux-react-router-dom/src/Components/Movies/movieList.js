import React from "react";
import Header from "./movieHeader";
import Form from "./movieForm"
export default function Movies(props) {
  console.log(props);
  const { add, /* get, */ state, del } = props;
  console.log(state.movies);
  return (
    <div>
      <Header />
      <Form add ={add}/>
      {state.movies.map((x) => {
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
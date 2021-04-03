import React from "react";
import { useDispatch } from "react-redux";

export default function Characters(props) {
  const { del, state } = props;
  const dispatch = useDispatch();

  function onDelete(e) {
    e.preventDefault();
    console.log(del);
    dispatch(del(e.target.parentNode.id));
    console.log(e.target.parentNode);
  }
  return (
    <div>
      {state.map((x) => {
        console.log(x);
        return (
          <div className="charGridBox" key={x.id}>
            <div className="charDiv" id={x.id} >
              <img src={x.img} alt="cat.jpeg" className="charImg"></img>
              <h1 className="character">{x.name}</h1>
              <button onClick={onDelete} className="delBtn">
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

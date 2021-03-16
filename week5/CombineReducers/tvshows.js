const redux = require("redux");
let initialState = {
  tvShows: [],
};
function addTvShow(tvShow) {
  return {
    type: "ADD_TV_SHOW",
    payload: tvShow,
  };
}
function deleteTvShow(tvShow) {
  return {
    type: "DELETE_TV_SHOW",
    payload: tvShow,
  };
}
function tvShowReducer(state = { initialState }, action) {
  switch (action.type) {
    case "ADD_TV_SHOW":
      return {
        ...state,
        tvShows: [...state.initialState.tvShows, action.payload],
      };
    case "DELETE_TV_SHOW":
     const updatedArr = state.tvShows.filter(
        (show) => show !== action.payload
      );
      return {
        ...state,
        tvShows: updatedArr,
      };
    default:
      return state;
  }
}
const store = redux.createStore(tvShowReducer)
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(addTvShow("Walking Dead"))
store.dispatch(deleteTvShow("Walking Dead"))
module.exports = { tvShowReducer };
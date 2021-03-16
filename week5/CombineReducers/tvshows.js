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
module.exports = { tvShowReducer, addTvShow, deleteTvShow };
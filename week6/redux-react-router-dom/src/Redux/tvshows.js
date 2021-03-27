import { v4 as uuidv4 } from "uuid";

const initialState = {
  tvShows: [
    { title: "The Office", id: uuidv4() },
    { title: "Modern Family", id: uuidv4() },
  ],
};
export function addTvShow(tvShow) {
  return {
    type: "ADD_TV_SHOW",
    payload: tvShow,
  };
}
export function deleteTvShow(tvShow) {
  return {
    type: "DELETE_TV_SHOW",
    payload: tvShow,
  };
}
export function getTvShow() {
  return {
    type: "GET_TV_SHOW",
  };
}
export function tvShowReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TV_SHOW":
      return {
        ...state,
        tvShows: [...state.tvShows, action.payload],
      };
    case "DELETE_TV_SHOW":
      const updatedArr = state.tvShows.filter(
        (show) => show !== show.id
      );
      return {
        ...state,
        tvShows: updatedArr,
      };
    case "GET_TV_SHOW":
      return {
        ...state,
      };
    default:
      return state;
  }
}

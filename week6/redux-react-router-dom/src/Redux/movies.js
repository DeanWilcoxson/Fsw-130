import { v4 as uuidv4 } from "uuid";
const initialState = {
  movies: [
    { title: "Star Wars", id: uuidv4() },
    { title: "The Goonies", id: uuidv4() },
  ],
};
export function addMovie(movie) {
  return {
    type: "ADD_MOVIE",
    payload: movie,
  };
}
export function deleteMovie(movie) {
  return {
    type: "DELETE_MOVIE",
    payload: movie,
  };
}
export function getMovie() {
  return {
    type: "GET_MOVIE",
  };
}
export function movieReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case "DELETE_MOVIE":
      const updatedArr = state.movies.filter(
        (movie) => movie !== action.payload
      );
      return {
        ...state,
        movies: updatedArr,
      };
    case "GET_MOVIE":
      return {
        ...state,
      };
    default:
      return state;
  }
}
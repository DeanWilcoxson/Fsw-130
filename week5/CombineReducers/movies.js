const initialState = {
  movies:[]
}
function addMovie(movie) {
  return {
    type: "ADD_MOVIE",
    payload: movie,
  };
}
function deleteMovie(movie) {
  return {
    type: "DELETE_MOVIE",
    payload: movie,
  };
}
function movieReducer(state = { initialState }, action) {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.initialState.movies, action.payload],
      };
    case "DELETE_MOVIE":
      const updatedArr = state.movies.filter(
        (movie) => movie !== action.payload
      );
      return {
        ...state,
        movies: updatedArr,
      };
    default:
      return state;
  }
}
module.exports = { movieReducer, addMovie, deleteMovie };
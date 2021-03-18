const redux = require("redux");
const { movieReducer, addMovie, deleteMovie, getMovie } = require("./movies");
const {
  tvShowReducer,
  addTvShow,
  deleteTvShow,
  getTvShow,
} = require("./tvshows");
let mainReducer = redux.combineReducers({
  movies: movieReducer,
  tvShows: tvShowReducer,
});
const store = redux.createStore(mainReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addMovie("Star Wars"));
store.dispatch(addMovie("Pulp Fiction"));
store.dispatch(addMovie("Reservoir Dogs"));

store.dispatch(addTvShow("Dragon Ball Z"));
store.dispatch(addTvShow("The Office"));
store.dispatch(addTvShow("Modern Family"));

store.dispatch(deleteMovie("Reservoir Dogs"));
store.dispatch(deleteTvShow("Modern Family"));

store.dispatch(getMovie());
store.dispatch(getTvShow());

const redux = require("redux");
const { movieReducer, addMovie, deleteMovie, getMovie } = require("./movies");
const { tvShowReducer, addTvShow, deleteTvShow, getTvShow  } = require("./tvshows");
let mainReducer = redux.combineReducers({
  movies: movieReducer,
  tvShows: tvShowReducer,
});
const store = redux.createStore(mainReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addMovie("Star Wars1"));
store.dispatch(addMovie("Star Wars2"));
store.dispatch(addMovie("Star Wars3"));
store.dispatch(addMovie("Star Wars4"));

store.dispatch(deleteMovie("Star Wars2"));

store.dispatch(addTvShow("Walking Dead1"));
store.dispatch(addTvShow("Walking Dead2"));
store.dispatch(addTvShow("Walking Dead3"));
store.dispatch(addTvShow("Walking Dead4"));

store.dispatch(deleteTvShow("Walking Dead3"));

store.dispatch(getMovie())
store.dispatch(getTvShow())
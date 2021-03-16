const redux = require("redux");
const { movieReducer, addMovie, deleteMovie } = require("./movies");
const { tvShowReducer, addTvShow, deleteTvShow  } = require("./tvshows");
let mainReducer = redux.combineReducers({
  movieReducer,
  tvShowReducer,
});
const store = redux.createStore(mainReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addMovie("Star Wars"));
store.dispatch(deleteMovie("Star Wars"));
store.dispatch(addTvShow("Walking Dead"));
store.dispatch(deleteTvShow("Walking Dead"));
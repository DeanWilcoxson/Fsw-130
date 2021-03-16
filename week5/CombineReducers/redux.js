const redux = require("redux");
const { movieReducer } = require("./movies");
const { tvShowReducer } = require("./tvshows");
let mainReducer = redux.combineReducers({
  movieReducer,
  tvShowReducer,
});
const store = redux.createStore(mainReducer);
store.subscribe(() => {
  console.log(store.getState());
});
// console.log(mainReducer, store);
import { createStore, combineReducers } from "redux";
import { movieReducer } from "../Redux/movies";
import { tvShowReducer } from "../Redux/tvshows";

let mainReducer = combineReducers({
  movies: movieReducer,
  tvShows: tvShowReducer,
});
const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
  console.log(store.getState());
});
export default store;

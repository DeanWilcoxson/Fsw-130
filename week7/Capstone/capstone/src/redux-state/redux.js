import { createStore, combineReducers } from "redux";
import { dbzReducer } from "./dbzReducer";
import { rmReducer } from "./rmReducer";
import { swReducer } from "./swReducer";

let mainReducer = combineReducers({
  rmChars: rmReducer,
  swChars: swReducer,
  dbzChars: dbzReducer
});
const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
  console.log(store.getState());
});
export default store;

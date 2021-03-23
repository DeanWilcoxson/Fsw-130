import { createStore } from "redux";
const initialState = [];
export function addPerson(person) {
  return {
    type: "ADD_CHARACTER",
    person: person,
  };
}
export function removePerson(person) {
  return {
    type: "REMOVE_CHARACTER",
    person: person,
  };
}
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CHARACTER":
      console.log(state);
      return [...state, action.person];
    case "REMOVE_CHARACTER":
      console.log(action.person);
      const updatedArr = state.filter(
        (thing) => thing.name.toLowerCase() !== action.person.name.toLowerCase()
      );
      console.log(updatedArr);
      return [...updatedArr];
    default:
      return state;
  }
}
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
  console.log(store.getState());
});
export default store;
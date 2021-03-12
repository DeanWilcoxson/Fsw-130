const redux = require("redux");
const store = Redux.createStore(reducer);
let state = store.getState();
let initialState = {
  contacts: [
    {
      firstName: "dean",
      lastName: "wilcoxson",
      number: "2098403854",
    },
    {
      firstName: "adam",
      lastName: "tappin",
      number: "2098403853",
    },
    {
      firstName: "kevin",
      lastName: "wilcoxson",
      number: "2098403342",
    },
  ],
};
function addContact(contact) {
  return { type: "ADD", payload: contact };
}
function deleteContact(contact) {
  return { type: "DELETE", payload: contact };
}
function reducer() {
  switch (action.type) {
    case "ADD":
      return { ...state, payload: contact };
    case "DELETE":
      return {};
    default:
      return state;
  }
}

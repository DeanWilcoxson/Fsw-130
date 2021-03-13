const initialState = [];
function addPerson(person) {
  return {
    type: "ADD_CHARACTER",
    person: person,
  };
}
function removePerson(person) {
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
      // const arrCopy = [...state.favoriteThings]
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
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var inputName = document.getElementById("name").value;
  var inputNum = document.getElementById("number").value;
  store.dispatch(
    addPerson({
      name: inputName,
      number: inputNum,
    })
  );
  var lists = document.getElementById("list");
  var li = document.createElement("li");
  li.textContent = `${inputName}: ${inputNum}`;
  var removeBtn = document.createElement("button");
  removeBtn.setAttribute("id", "removeBTN");
  (removeBtn.textContent = "x"), lists.append(li);
  li.append(removeBtn);
  form.reset()
  removeBtn.addEventListener("click", (x) => {
    li.remove();
    store.dispatch(
      removePerson({
        name: inputName,
        number: inputNum,
      })
    );
  });
});
const store = Redux.createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

import { v4 as uuidv4 } from "uuid";
const initialState = {
  chars: [{ name: "Vegeta", id: uuidv4() }],
};
export function addDbzChar(character) {
  return { type: "ADD_CHAR", data: character };
}
export function delDbzChar(character) {
  return { type: "DELETE_CHAR", data: character };
}
export function getDbzChars() {
  return {
    type: "GET_CHARS",
  };
}
export function dbzReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CHAR":
      return {
        ...state,
        chars: [...state.chars, action.payload],
      };
    case "DELETE_CHAR":
      console.log("hello");
      console.log(action.payload);
      const updatedArr = state.chars.filter((character) => {
        console.log(character);
        return character.id !== action.payload;
      });
      return {
        ...state,
        chars: updatedArr,
      };
    case "GET_CHARS":
      return {
        ...state,
      };
    default:
      return state;
  }
}

import {v4 as uuidv4} from "uuid";
const initialState = {
  chars: [{ name: "Rick Sanchez", id: uuidv4() }],
};
export function addRmChar(character) {
  return { type: "ADD_CHAR", data: character };
}
export function delRmChar(character) {
  return { type: "DELETE_CHAR", data: character };
}
export function getRmChars() {
  return {
    type: "GET_CHARS",
  };
}
export function rmReducer(state = initialState, action) {
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

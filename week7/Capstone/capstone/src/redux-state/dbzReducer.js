import { v4 as uuidv4 } from "uuid";
const initialState = {
  chars: [
    {
      name: "Vegeta",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPhSmnWJkAO9V2bwH-LMtlE-EvUiCE_7ipLQ&usqp=CAU",
      id: uuidv4(),
    },
    {
      name: "Goku",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7vPrpAKVAjwnPOrf2-BgTQ3-FAmZ5GFigiw&usqp=CAU",
      id: uuidv4(),
    },
    {
      name: "Gohan",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ64E2tLWNgYUECViYmiEVrhsVlfJ8eorQV8w&usqp=CAU",
      id: uuidv4(),
    },
    {
      name: "Piccolo",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSybQmnbqlFNs-A12zAmtC_LfpxG1f0GF1Tvg&usqp=CAU",
      id: uuidv4(),
    },
    {
      name: "Tien",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSEJwNKSrffOs5Tx67P87xWMLiC-KnD274A&usqp=CAU",
      id: uuidv4(),
    },
    {
      name: "Yamcha",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMBEsz9DU65rGN5NzdTsN6MaqPnMFbRtlpRw&usqp=CAU",
      id: uuidv4(),
    },
    {
      name: "Krillin",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS4N29sftmti9mVVxF4f4Z5XpuQulJUX7QxA&usqp=CAU",
      id: uuidv4(),
    },
    {
      name: "Frieza",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKyX5oZoOwWc3aMSg0QOoeqf1MEfWheZx-sA&usqp=CAU",
      id: uuidv4(),
    },
  ],
};
export function addDbzChar(character) {
  return { type: "ADD_DBZ_CHAR", data: character };
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
    case "ADD_DBZ_CHAR":
      console.log("dbzReducer")
      return {
        ...state,
        chars: [...state.chars, action.data],
        
      };
    case "DELETE_CHAR":
      console.log("hello");
      console.log(action.data);
      const updatedArr = state.chars.filter((character) => {
        console.log(character);
        return character.id !== action.data;
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

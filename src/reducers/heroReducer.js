import { ADD_CHARACTER } from "../actions";
import { createCharacters } from "./helper";

function heroes(state = [], action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let heroes = [...state, createCharacters(action.id)];
      return heroes;

    default:
      return state;
  }
}

export default heroes;

import { combineReducers } from "redux";
import heroes from "./heroReducer";
import characters from "./characterReducer";

const rootReducer = combineReducers({
  characters,
  heroes,
});

export default rootReducer;

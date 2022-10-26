import { combineReducers } from "redux";
import { alertReducer } from "./alertReducer";
import { visibilityReducer } from "./filterReducers";
import { toDosReducer } from "./toDosReducer";

export const rootReducer = combineReducers({
  toDosReducer,
  visibilityReducer,
  alertReducer
})
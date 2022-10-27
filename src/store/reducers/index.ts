import { combineReducers } from "redux";
import { alertReducer } from "./alertReducer";
import { visibilityReducer } from "./filterReducers";
import { toDosReducer } from "./toDosReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  toDosReducer,
  visibilityReducer,
  alertReducer,
  userReducer
})
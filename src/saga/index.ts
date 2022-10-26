import { all } from "redux-saga/effects";
import { toDosWatcher } from "./todoSaga";

export function* rootWatcher() {
  yield all([toDosWatcher()])
}
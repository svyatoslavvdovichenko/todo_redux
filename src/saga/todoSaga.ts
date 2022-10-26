import { ITodos } from 'models/ITodos';
import axios, { AxiosResponse } from "axios";
import { put, takeEvery, call } from "redux-saga/effects";
import { setTodos } from "store/actions/toDoActions"
import { ToDosActionTypes } from "types/todos";

const fetchToDosFromApi = async (): Promise<ITodos[]> => await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=1").then(response => response.data);

function* fetchToDosWorker() {
  const response: ITodos[] = yield call(fetchToDosFromApi);
  console.log('response', response)
  // const { data } = response;
  yield put(setTodos(response));
  localStorage.setItem("todos", JSON.stringify(response));
}

export function* toDosWatcher() {
  yield takeEvery(ToDosActionTypes.FETCH_TODOS, fetchToDosWorker)
}
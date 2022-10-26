import axios, { AxiosResponse } from "axios";
import { put, takeEvery, call, StrictEffect } from "redux-saga/effects";
import { setUser } from "store/userReducer";
import { fetchUserAction, UserActionTypes } from "types/user";

const fetchUserFromApi = (countUser: number) => 
  axios.get(`https://jsonplaceholder.typicode.com/users?_limit=${countUser}`);

function* fetchUserWorker({ payload }: fetchUserAction) {
  const { data } = yield call(fetchUserFromApi, payload);
  yield put(setUser(data))
}

export function* userWatcher(): Generator<StrictEffect> {
  yield takeEvery(UserActionTypes.FETCH_USER, fetchUserWorker)
}
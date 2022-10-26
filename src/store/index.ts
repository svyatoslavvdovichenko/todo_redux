import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from 'saga';
import { visibilityReducer } from './filterRedux';
import { toDosReducer } from './toDosReducer';
import { userReducer } from "./userReducer";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  toDosReducer,
  visibilityReducer,
  userReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootWatcher);

export type RootState = ReturnType<typeof rootReducer>;
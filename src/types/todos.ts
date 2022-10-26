import { ITodos } from "models/ITodos";

export interface toDosState {
  todos: ITodos[];
}

export enum ToDosActionTypes {
  SET_TODOS = "SET_TODOS",
  FETCH_TODOS = "FETCH_TODOS",
  CHECK_TODOS = "CHECK_TODOS",
  DELETE_TODOS = "DELETE_TODOS",
  CREATE_TODO = "CREATE_TODO",
  EDIT_TODO = "EDIT_TODO"
}

interface checkToDoAction {
  type: ToDosActionTypes.CHECK_TODOS;
  payload: number;
}

interface deleteToDoAction {
  type: ToDosActionTypes.DELETE_TODOS;
  payload: number;
}

interface setToDoAction {
  type: ToDosActionTypes.SET_TODOS;
  payload: ITodos[]
}

interface fetchToDoAction {
  type: ToDosActionTypes.FETCH_TODOS;
}

interface createToDoAction {
  type: ToDosActionTypes.CREATE_TODO;
  payload: {
    id: number,
    title: string
  };
}

interface editToDoAction {
  type: ToDosActionTypes.EDIT_TODO;
  payload: {
    id: number,
    title: string
  }
}

export type toDoAction = setToDoAction 
  | fetchToDoAction 
  | checkToDoAction
  | deleteToDoAction
  | createToDoAction
  | editToDoAction;
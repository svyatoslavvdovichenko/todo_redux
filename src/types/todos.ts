import { ITodos } from "models/ITodos";

export interface toDosState {
  todos: ITodos[];
}

export enum ToDosActionTypes {
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

export type toDoAction = 
  | checkToDoAction
  | deleteToDoAction
  | createToDoAction
  | editToDoAction;
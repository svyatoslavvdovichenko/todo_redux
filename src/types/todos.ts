import { ITodos } from "models/ITodos";

export interface toDosState {
  todos: ITodos[];
}

export enum ToDosActionTypes {
  CHECKOUT_TODOS = "CHECKOUT_TODOS",
  DELETE_TODOS = "DELETE_TODOS",
  CREATE_TODO = "CREATE_TODO",
  EDIT_TODO = "EDIT_TODO"
}

interface checoutToDoAction {
  type: ToDosActionTypes.CHECKOUT_TODOS;
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
  | checoutToDoAction
  | deleteToDoAction
  | createToDoAction
  | editToDoAction;
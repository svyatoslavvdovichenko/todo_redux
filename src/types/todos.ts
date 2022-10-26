import { ITodos } from "models/ITodos";

export interface toDosState {
  todos: ITodos[];
}

export enum ToDosActionTypes {
  SET_TODOS = "SET_TODOS",
  FETCH_TODOS = "FETCH_TODOS",
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
  | checoutToDoAction
  | deleteToDoAction
  | createToDoAction
  | editToDoAction;
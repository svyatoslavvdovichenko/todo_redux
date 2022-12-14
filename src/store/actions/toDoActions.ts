import { ToDosActionTypes } from "types/todos";

export const checkToDos = (payload: number) => ({ type: ToDosActionTypes.CHECK_TODOS, payload });
export const deleteToDos = (payload: number) => ({ type: ToDosActionTypes.DELETE_TODOS, payload });
export const createToDo = (payload: { id: number, title: string }) => ({ type: ToDosActionTypes.CREATE_TODO, payload });
export const editToDo = (payload: { id: number, title: string }) => ({ type: ToDosActionTypes.EDIT_TODO, payload })
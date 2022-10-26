import { ITodos } from './../models/ITodos';
import { toDosState, toDoAction, ToDosActionTypes } from 'types/todos';

const initialState: toDosState = {
  todos: [],
}

export const toDosReducer = (state = initialState, action: toDoAction): toDosState => {
  switch (action.type) {
    case ToDosActionTypes.SET_TODOS:
      return { todos: action.payload };
    case ToDosActionTypes.CHECKOUT_TODOS:
      return { todos: state.todos.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed
        }
        return todo;
      })};
    case ToDosActionTypes.EDIT_TODO:
      return { todos: state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title
        }
        return todo;
      })}
    case ToDosActionTypes.DELETE_TODOS:
      return { todos: state.todos.filter((todo) => todo.id !== action.payload) }
    case ToDosActionTypes.CREATE_TODO:
      return { todos: [...state.todos, { userId: 1, id: action.payload.id, completed: false, title: action.payload.title }] }
    default:
      return state;
  }
}

export const setTodos = (payload: ITodos[]) => ({ type: ToDosActionTypes.SET_TODOS, payload });
export const fetchToDos = () => ({ type: ToDosActionTypes.FETCH_TODOS });
export const checoutToDos = (payload: number) => ({ type: ToDosActionTypes.CHECKOUT_TODOS, payload });
export const deleteToDos = (payload: number) => ({ type: ToDosActionTypes.DELETE_TODOS, payload });
export const createToDo = (payload: { id: number, title: string }) => ({ type: ToDosActionTypes.CREATE_TODO, payload });
export const editToDo = (payload: { id: number, title: string }) => ({ type: ToDosActionTypes.EDIT_TODO, payload })
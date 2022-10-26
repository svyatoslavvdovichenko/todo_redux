import { toDosState, toDoAction, ToDosActionTypes } from 'types/todos';

const initialState: toDosState = {
  todos: [],
}

export const toDosReducer = (state = initialState, action: toDoAction): toDosState => {
  switch (action.type) {
    case ToDosActionTypes.SET_TODOS:
      return { todos: action.payload };
    case ToDosActionTypes.CHECK_TODOS:
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
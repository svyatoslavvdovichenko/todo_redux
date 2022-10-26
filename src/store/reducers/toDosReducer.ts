import { toDosState, toDoAction, ToDosActionTypes } from 'types/todos';

const initialState: toDosState = {
  todos: JSON.parse(localStorage.getItem("todos")!) || [],
}

export const toDosReducer = (state = initialState, action: toDoAction): toDosState => {
  switch (action.type) {
    case ToDosActionTypes.SET_TODOS:
      localStorage.setItem("todos", JSON.stringify(action.payload))
      return { todos: action.payload };
    case ToDosActionTypes.CHECK_TODOS:
      const checkedToDo = state.todos.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed
        }
        return todo;
      })
      localStorage.setItem("todos", JSON.stringify(checkedToDo))
      return { todos: checkedToDo };
    case ToDosActionTypes.EDIT_TODO:
      localStorage.setItem("todos", JSON.stringify(
        state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title
          }
        return todo;
      })))
      return { todos: state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title
        }
        return todo;
      })}
    case ToDosActionTypes.DELETE_TODOS:
      localStorage.setItem("todos", JSON.stringify(state.todos.filter((todo) => todo.id !== action.payload)));
      return { todos: state.todos.filter((todo) => todo.id !== action.payload) }
    case ToDosActionTypes.CREATE_TODO:
      const newToDo = { 
        userId: 1, 
        id: action.payload.id, 
        completed: false, 
        title: action.payload.title 
      };

      localStorage.setItem("todos", JSON.stringify([...state.todos, newToDo]));
      return { todos: [...state.todos, newToDo] }
    default:
      return state;
  }
}
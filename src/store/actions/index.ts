import { setAlert } from "./alertActions"
import { setVisibilityFilter } from "./filterActions"
import { checkToDos, createToDo, deleteToDos, editToDo, fetchToDos, setTodos } from "./toDoActions"

export default {
  setAlert,
  setTodos,
  fetchToDos,
  checkToDos,
  deleteToDos,
  createToDo,
  editToDo,
  setVisibilityFilter
}
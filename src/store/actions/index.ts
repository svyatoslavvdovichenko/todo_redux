import { setAlert } from "./alertActions"
import { setVisibilityFilter } from "./filterActions"
import { checkToDos, createToDo, deleteToDos, editToDo } from "./toDoActions"

export default {
  setAlert,
  checkToDos,
  deleteToDos,
  createToDo,
  editToDo,
  setVisibilityFilter
}
import { setAlert } from "./alertActions"
import { setVisibilityFilter } from "./filterActions"
import { checkToDos, createToDo, deleteToDos, editToDo } from "./toDoActions"
import { fetchUser, setUser } from "./userActions"

export default {
  setAlert,
  checkToDos,
  deleteToDos,
  createToDo,
  editToDo,
  setVisibilityFilter,
  fetchUser,
  setUser
}
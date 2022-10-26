import { FC, useEffect } from "react";
import { ListGroup } from "reactstrap";
import OneToDo from "components/OneToDo/OneToDo";
import { useDispatch } from "react-redux";
/*import { fetchToDos } from "store/toDosReducer";*/
import { useTypedSelector } from "hooks/useTypeSelector";
import { ITodos } from "models/ITodos";

const AllTodos: FC = () => {
  const dispatch = useDispatch();
  const todos = useTypedSelector(state => state.toDosReducer.todos);
  const filter = useTypedSelector(state => state.visibilityReducer.filter);

  useEffect(() => {
    //dispatch(fetchToDos());
  }, []);

  const getVisibleTodos = (todos: ITodos[], filter: string): ITodos[] => {
    switch (filter) {
      case "showAll":
        return todos;
      case "showDone":
        return todos.filter(todo => todo.completed);
      case "showUnDone":
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }

  return (
    <ListGroup>
      {getVisibleTodos(todos, filter).map((todo) => 
        <OneToDo 
          key={todo.id}
          {...todo}
        />
      )}
    </ListGroup>
  );
};

export default AllTodos;

import { FC } from "react";
import { ListGroup } from "reactstrap";
import { useTypedSelector } from "hooks/useTypeSelector";
import { ITodos } from "models/ITodos";
import { OneToDo } from "components";

const AllTodos: FC = () => {
  const todos = useTypedSelector(state => state.toDosReducer.todos);
  const filter = useTypedSelector(state => state.visibilityReducer.filter);


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

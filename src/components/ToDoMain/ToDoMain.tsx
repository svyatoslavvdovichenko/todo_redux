import { FC, useEffect } from "react";
import { Container } from "reactstrap";
import AddNewToDo from "components/AddNewToDo/AddNewToDo";
import AllTodos from "components/AllTodos/AllTodos";

const ToDoMain: FC = () => {
  useEffect(()=> {
    document.title = "ToDo list";
  }, []);

  return (
    <Container className="content">
      <AddNewToDo />
      <AllTodos />
    </Container>
  )
}

export default ToDoMain;
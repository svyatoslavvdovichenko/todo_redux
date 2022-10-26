import { FC } from "react";
import { Container } from "reactstrap";
import { AddNewToDo, AllTodos } from "components";

const ToDoMain: FC = () => (
  <Container className="content">
    <AddNewToDo />
    
    <AllTodos />
  </Container>
)


export default ToDoMain;
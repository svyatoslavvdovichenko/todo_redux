import { FC } from "react";
import { Helmet } from "react-helmet";
import { Container } from "reactstrap";
import { AddNewToDo, AllTodos } from "components";

const ToDoMain: FC = () => (
  <>
    <Helmet>
        <title>Todos</title>
    </Helmet>
    
    <Container className="content">
      <AddNewToDo />
      
      <AllTodos />
    </Container>
  </>
)


export default ToDoMain;
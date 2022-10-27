import { FC, useState } from "react";
import { 
  Form,
  FormGroup,
  Input, 
  Label, 
  Container, 
  Button,
} from "reactstrap";
import { createRandomValue } from "helpers/randomId";
import { AlertToDo, Filter } from "components";
import { useActions, useTypedSelector } from "hooks";

const AddNewToDo: FC = () => {
  const [toDoText, setToDoText] = useState<string>("");
  
  const { todos } = useTypedSelector(state => state.toDosReducer);
  const { createToDo, setAlert } = useActions();
  
  const addTextTodo = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setToDoText(event.target.value);
  }

  const addOneTodo = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    if (toDoText.trim() === "") {
      showAlert("Text must not empty");
      return;
    }

    createToDo({ id: createRandomValue(todos), title: toDoText });
    setToDoText("");
  }

  const enterOneTodo = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      if (toDoText.trim() === "") {
        showAlert("Text must not empty");
        return;
      }

      event.preventDefault();
      createToDo({ id: createRandomValue(todos), title: toDoText });
      setToDoText("");
    }
  }

  const showAlert = (alertMessage: string) => { 
    setAlert({ alert: alertMessage, isVisibleAlert: true })
  
    setTimeout(() => {
      setAlert({ alert: "", isVisibleAlert: false })
    }, 3000);
  }

  return (
    <Container className="mt-2">
      <Form>
        <FormGroup>
          <Label for="todoAdd">
            ToDos
          </Label>

          <Input
            id="todoAdd"
            name="todo"
            placeholder="Todo example"
            type="text"
            bsSize="sm"
            className="mb-3"
            onChange={addTextTodo}
            value={toDoText}
            onKeyDown={(event) => enterOneTodo(event)}
          />

          <Container className="d-flex justify-content-between">
            <Button
              color="dark"
              size="sm"
              className="pl-1"
              onClick={addOneTodo}
            >
              Add new todo
            </Button>
            
            <Filter />
          </Container>
        </FormGroup>
      </Form>
      <AlertToDo />
    </Container>
  );
};

export default AddNewToDo;

import { FC, useState } from "react";
import { 
  Form,
  FormGroup,
  Input, 
  Label, 
  Container, 
  Button,
} from "reactstrap";
import AlertToDo from "components/AlertToDo/AlertToDo";
import Filter from "components/Filter/Filter";
import { useDispatch } from "react-redux";
import { createToDo } from "store/toDosReducer";
import { useTypedSelector } from "hooks/useTypeSelector";
import { createRandomValue } from "helpers/randomId";

const AddNewToDo: FC = () => {
  const [toDoText, setToDoText] = useState<string>("");
  const [visibleAlert, setVisibleAlert] = useState<boolean>(false);
  const [textAlert, setTextAlert] = useState<string>("");
  const todos = useTypedSelector(state => state.toDosReducer.todos)
  const dispatch = useDispatch();
  
  const addTextTodo = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setToDoText(event.target.value);
  }

  const addOneTodo = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    if (toDoText.trim() === "") {
      showAlert("Text must not empty");
      return;
    }

    dispatch(createToDo({ id: createRandomValue(todos), title: toDoText }));
    setToDoText("");
  }

  const showAlert = (alertMessage: string) => {
    setVisibleAlert(true);
    setTextAlert(alertMessage);
    setTimeout(() => {
      setVisibleAlert(false)
    }, 2000);
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
      <AlertToDo 
        textAlert={textAlert}
        setVisibleAlert={setVisibleAlert}
        visibleAlert={visibleAlert} 
      />
    </Container>
  );
};

export default AddNewToDo;

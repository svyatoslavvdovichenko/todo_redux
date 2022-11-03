import { useActions } from "hooks";
import { FC, useState } from "react";
import { Button, Container, Input, ListGroupItem} from "reactstrap";
import { AlertToDo } from "components";
import { IOneToDo } from "./IOneToDo";
import { checkInputs } from "helpers/checkInput";

const OneToDo: FC<IOneToDo> = ({ userId, id, title, completed }) => {
  const [editId, setEditId] = useState<number | null>(null);
  const [newToDoText, setNewToDoText] = useState<string>(title);
  
  const { editToDo, setAlert, checkToDos, deleteToDos } = useActions();
  let timer: NodeJS.Timeout;

  const editOneTodo = (): void => {
    if (newToDoText.trim() === "") {
      return;
    }
    editToDo({ id, title: newToDoText });
    setEditId(null);
  }

  const editedTextToDo = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewToDoText(event.target.value);
  }

  const checkeckCheckbox = (): void => {
    clearTimeout(timer);
    timer = setTimeout(() => { 
      checkToDos(id);
    }, 200);
  }

  const openEditTodo = (): void  => {
    clearTimeout(timer);
    setEditId(id);
  }

  const cancelEdit = (): void => {
    setEditId(null);
    setNewToDoText(title);
  }

  const deleteToDo = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.stopPropagation();
    deleteToDos(id);
  }

  return (
    <>
      {editId ? (
        <>
          <ListGroupItem 
            className="d-flex w-100"
            id="DisabledAutoHide"
          >
            <Container className="d-flex flex-nowrap justify-content-between p-0">
              <Input 
                invalid={checkInputs(newToDoText)}
                type="text"
                value={newToDoText}
                onChange={editedTextToDo}
                className="w-65"
              />
              <Button 
                color="success"
                onClick={editOneTodo}
                className="w-14"
              >
                Save
              </Button>
              <Button 
                color="danger"
                onClick={cancelEdit}
                className="w-17"
              >
                Cancel
              </Button>
            </Container>
          </ListGroupItem>
          <AlertToDo />
        </>
      ) : (
        <ListGroupItem 
          className="d-flex justify-content-between align-items-center"
          color={completed? "danger" : ""}
          onClick={checkeckCheckbox}
          onDoubleClick={openEditTodo}
        >
          <Input 
            type="checkbox"
            checked={completed}
          />
            {completed ? (
                <s>{title}</s>
              ) : (
                <span> 
                  {title}
                </span>
              )}
          <Button 
            color="danger"
            onClick={(event) => deleteToDo(event)}
          >
            Delete
          </Button>
        </ListGroupItem>
      )}
    </>
  );
};

export default OneToDo;
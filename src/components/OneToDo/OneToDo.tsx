import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Container, Input, ListGroupItem } from "reactstrap";
import { checoutToDos, deleteToDos, editToDo } from "store/toDosReducer";
import AlertToDo from "components/AlertToDo/AlertToDo";
import { IOneToDo } from "./IOneToDo";
import { checkInputs } from "helpers/checkInput";
import "./style.css"

const OneToDo: FC<IOneToDo> = ({ userId, id, title, completed }) => {
  const [editId, setEditId] = useState<number | null>(null);
  const [newToDoText, setNewToDoText] = useState<string>(title);
  const [visibleAlert, setVisibleAlert] = useState<boolean>(false);
  const [textAlert, setTextAlert] = useState<string>("");
  const dispatch = useDispatch();
  let timer: NodeJS.Timeout;

  const editOneTodo = (): void => {
    if (newToDoText.trim() === "") {
      showAlert("Text must not empty")
      return;
    }
    dispatch(editToDo({ id, title: newToDoText }));
    setEditId(null);
  }

  const showAlert = (alertMessage: string) => {
    setVisibleAlert(true);
    setTextAlert(alertMessage);
    setTimeout(() => {
      setVisibleAlert(false)
    }, 2000);
  }

  const editedTextToDo = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewToDoText(event.target.value);
  }

  const checkeckCheckbox = (): void => {
    clearTimeout(timer);
    timer = setTimeout(() => { 
      dispatch(checoutToDos(id));
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
    dispatch(deleteToDos(id));
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
        <AlertToDo 
          textAlert={textAlert}
          setVisibleAlert={setVisibleAlert}
          visibleAlert={visibleAlert} 
        />
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
          {completed? 
            (
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
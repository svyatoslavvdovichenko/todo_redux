import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input, ListGroupItem} from "reactstrap";
import { checoutToDos, deleteToDos, editToDo } from "store/toDosReducer";
import AlertToDo from "components/AlertToDo/AlertToDo";
import { IOneToDo } from "./IOneToDo";

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
          className="d-flex justify-content-between align-items-center"
          id="DisabledAutoHide"
        >
          <Input 
            type="text"
            value={newToDoText}
            onChange={editedTextToDo}
          />
          <Button 
            color="success"
            onClick={editOneTodo}
          >
            Save
          </Button>
          <Button 
            color="danger"
            onClick={cancelEdit}
            >
            Cancel
          </Button>
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
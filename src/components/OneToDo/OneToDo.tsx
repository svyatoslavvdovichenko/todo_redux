import { useActions } from "hooks";
import { FC, useState } from "react";
import { Button, Input, ListGroupItem} from "reactstrap";
import { AlertToDo } from "components";
import { IOneToDo } from "./IOneToDo";

const OneToDo: FC<IOneToDo> = ({ userId, id, title, completed }) => {
  const [editId, setEditId] = useState<number | null>(null);
  const [newToDoText, setNewToDoText] = useState<string>(title);
  
  const { editToDo, setAlert, checkToDos, deleteToDos } = useActions();
  let timer: NodeJS.Timeout;

  const editOneTodo = (): void => {
    if (newToDoText.trim() === "") {
      showAlert("Text must not empty")
      return;
    }
    editToDo({ id, title: newToDoText });
    setEditId(null);
  }

  const showAlert = (alertMessage: string) => {  
    setAlert({ alert: alertMessage, isVisibleAlert: true })
  
    setTimeout(() => {
      setAlert({ alert: "", isVisibleAlert: false })
    }, 3000);
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
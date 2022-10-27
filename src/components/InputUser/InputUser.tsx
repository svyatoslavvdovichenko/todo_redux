import { checkInputs } from 'helpers/checkInput';
import { useActions } from 'hooks';
import { FC, useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const InputUser: FC = () => {
  const [countUser, setCountUser] = useState<string>("");
  
  const { fetchUser, setAlert } = useActions();

  const addUser = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    
    if (countUser.trim() === "") {
      showAlert("Text must not empty");
      return;
    }
    const count = Number(countUser);

    fetchUser(count);
    setCountUser("");
  }

  const enterUser = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      console.log(countUser);
      
      if (countUser.trim() === "") {
        showAlert("Text must not empty");
        return;
      }

      event.preventDefault();  

      const count = Number(countUser);

      fetchUser(count);
      setCountUser("");
    }
  }

  const takeCountUser = (event: React.ChangeEvent<HTMLInputElement>) => {        
    if (Number(event.target.value) >= 10) {
      showAlert("Max value = 10");
      return;
    }
    
    setCountUser(event.target.value);
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
          <Label for="users">
            Enter count users
          </Label>
        <Container className="d-flex flex-column">
          <Input
            id="users"
            placeholder="1"
            type="number"
            bsSize="sm"
            className="mb-3"
            value={countUser}
            onKeyDown={enterUser}
            onChange={takeCountUser}
            invalid={checkInputs(countUser)}
          />

          <Button
            color="dark"
            className="pl-1"
            onClick={addUser}
          >
            Get users
          </Button>
        </Container>
          
        </FormGroup>
      </Form>
    </Container>
  )
}


export default InputUser;

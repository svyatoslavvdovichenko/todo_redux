import { useTypedSelector } from "hooks";
import { FC } from "react";
import { userNotFound } from "image";
import { Card, Container } from "react-bootstrap";
import "./style.scss"

const UsersCard: FC = () => {
  const { users } = useTypedSelector(state => state.userReducer);
  
  return (
    <Container className="d-flex pt-2 mb-2 justify-content-between flex-wrap">
      {users && users.map((user)=> (
        <Card key={user.id} className="h-100 w-45 m-1">
          <Card.Img 
            variant="top" 
            src={userNotFound}
            alt="example"
            className="w-25"
          />

          <Card.Body>
            <Card.Title>
              {user.name}
            </Card.Title>
            
            <Card.Text>
              {user.username}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
  </Container>
  )
}
  
export default UsersCard;
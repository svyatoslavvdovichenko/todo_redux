import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Home: FC = () => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Container className="mt-2">
      <Form>
        <FormGroup>
          <Label for="users">
            Enter count users
          </Label>
          <Input
            id="users"
            placeholder="1"
            type="number"
            bsSize="sm"
            className="mb-3"
          />
          <Container className="d-flex justify-content-between">
            <Button
              color="dark"
              size="sm"
              className="pl-1"
            >
              Add new todo
            </Button>
          </Container>
        </FormGroup>
      </Form>
    </Container>
  </>
);


export default Home;

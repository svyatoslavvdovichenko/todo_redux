import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import { 
  Footer,
  Header, 
  Home, 
  Profile, 
  ToDoMain 
} from 'components';


const App: FC = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/todo">
        <ToDoMain />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
    </Switch>
    <Footer />
  </>
);

export default App;

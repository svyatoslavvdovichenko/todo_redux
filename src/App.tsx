import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import ToDoMain from 'components/ToDoMain/ToDoMain';
import Home from 'components/Home/Home';
import Profile from 'components/Profile/Profile';

const App: FC = () => {
  return (
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
        <Redirect from="*" to="home" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

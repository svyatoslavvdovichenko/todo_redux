import { AlertToDo, InputUser, UsersCard } from 'components';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

const Home: FC = () => {
  
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <InputUser />
      <UsersCard />
      <AlertToDo />
    </>
  )
}


export default Home;

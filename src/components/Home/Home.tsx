import { FC, useEffect } from 'react';

const Home: FC = () => {
  useEffect(()=> {
    document.title = "Profile";
  }, []);
  
  return (
    <>
      Home
    </>
  );
}

export default Home;

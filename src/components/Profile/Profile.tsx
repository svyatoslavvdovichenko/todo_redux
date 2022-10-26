import { FC, useEffect } from 'react';

const Profile: FC = () => {
  useEffect(()=> {
    document.title = "Profile";
  }, []);
  
  return (
    <>
      Profile
    </>
  );
}

export default Profile;

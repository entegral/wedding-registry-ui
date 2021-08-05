import { useState } from 'react';
import Authenticated from './Authenticated';
import FetchQuestions from './FetchQuestions';
import Unauthenticated from './Unauthenticated';

function logout(setUser) {
  setUser(null)
}

function LoginManager() {
  const [user, setUser] = useState(null)
 

  if (!user) {
    return (
     <Unauthenticated setUser={setUser} />
    );
  }
  return (
    <Authenticated 
      user={user}
      AppEntryPoint={FetchQuestions}
      logout={logout.bind(null, setUser)}
    />
   );
}

export default LoginManager;

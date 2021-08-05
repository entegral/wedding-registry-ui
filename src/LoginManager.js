import { useState } from 'react';
import FetchQuestions from './FetchQuestions';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

function logout(setUser) {
  setUser(null)
}


function LoginManager() {
  const [user, setUser] = useState(null)
 

  if (!user) {
    return (
     <LoggedOut setUser={setUser} />
    );
  }
  return (
    <LoggedIn 
      user={user}
      AppEntryPoint={FetchQuestions}
      logout={logout.bind(null, setUser)}
    />
   );
}

export default LoginManager;

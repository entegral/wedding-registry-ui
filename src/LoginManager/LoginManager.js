import { useState } from 'react';
import Authenticated from './Authenticated';
import Unauthenticated from './Unauthenticated';

function logout(setUser) {
  setUser(null)
}

function LoginManager({AppEntryPoint}) {
  const [user, setUser] = useState(null)
 

  if (!user) {
    return (
     <Unauthenticated setUser={setUser} />
    );
  }
  return (
    <Authenticated 
      user={user}
      AppEntryPoint={AppEntryPoint}
      logout={logout.bind(null, setUser)}
    />
   );
}

export default LoginManager;

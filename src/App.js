import { useState } from 'react';
import './App.css';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

function logout(setUser) {
  setUser(null)
}

function App() {

  const [user, setUser] = useState(null)
  if (!user) {
    return (
     <LoggedOut setUser={setUser} />
    );
  }
  return (
    <LoggedIn 
      user={user}
      logout={logout.bind(null, setUser)}
    />
   );
}

export default App;

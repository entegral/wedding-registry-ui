import { useEffect, useState } from 'react';
import './App.css';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

function logout(setUser) {
  setUser(null)
}


function App() {
  const [user, setUser] = useState(null)
  const [questions, setQuestions] = useState(null)

  useEffect(() => {
    async function getQuestions() {
      setQuestions([
        {
          question: "Are you attending?",
          answer: true 
        },
        {
          question: "Do you need lodging?",
          answer: false
        }
      ])
    }
    getQuestions()
  }, [])

  if (!user) {
    return (
     <LoggedOut setUser={setUser} />
    );
  }
  return (
    <LoggedIn 
      user={user}
      questions={questions}
      logout={logout.bind(null, setUser)}
    />
   );
}

export default App;

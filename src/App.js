import FetchQuestions from "./Questions/FetchQuestions"


function App({user}) {
  console.log('[App] user:', user)

  // useEffect to fetch user data from dynamo and provide the data to 
  return (
    <FetchQuestions user={user}/>
  )
}

export default App
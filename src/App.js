import FetchQuestions from "./Questions/FetchQuestions"


function App({user}) {
  console.log('[App] user:', user)

  // TODO useEffect to fetch user data from dynamo and provide the data to main app page manager
  return (
    <FetchQuestions user={user}/>
  )
}

export default App
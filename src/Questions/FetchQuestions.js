import { useEffect, useState } from "react"
import DisplayQuestions from "./DisplayQuestions"

function FetchQuestions({user}) {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    async function getQuestions(user) {
      // issue graphql query to fetch user's questions
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
  }, [user])

  return <DisplayQuestions questions={questions}/>
}

export default FetchQuestions
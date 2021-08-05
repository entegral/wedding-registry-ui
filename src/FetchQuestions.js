import { useEffect, useState } from "react"
import DisplayQuestions from "./DisplayQuestions"

function FetchQuestions() {
  const [questions, setQuestions] = useState([])

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

  return <DisplayQuestions questions={questions}/>
}

export default FetchQuestions
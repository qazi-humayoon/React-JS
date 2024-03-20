import { useState } from "react"
import Chai from "./chai"
function App() {
  const [marks, setMarks] = useState(15)

  function newmarks(){
    setMarks(50)
    
  }

  return (
    <>
    <Chai/>  
    <h1>chai aur react</h1>
    <h2>I have {marks} in exam</h2>
    <button onClick={newmarks}>Real</button>
    </>
    
  )
}

export default App


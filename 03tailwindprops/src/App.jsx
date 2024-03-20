import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }

  let newArr = [1,2,3]

  return (
    <>
    <h1 className='bg-green-600 text-black rounded-xl hover:bg-white hover:text-black cursor-pointer transition-all ease-linear'>TailWind Test </h1>
    <Card username = "chaiaurcode" btnText = "Click Here"/>
    <Card username = "humayoon"btnText = "Visit Me"/>
   
    </>
  )
}

export default App

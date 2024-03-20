import { useState } from "react"


function App() {
  const [color,setColor] = useState('olive')

  function Chg(){  //* can do like this also
    setColor('green')
  }

  return (
    <div className="w-full h-screen duration-200"  style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-3 rounded-xl font-bold">

        <button onClick={() => setColor('red')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>


        {/* for green color i have used onclick which expects a function and created a function which changes  the bg-color */}
        <button onClick={Chg} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Green"}}>Green</button>

        <button onClick={() =>{setColor("blue")}}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>

        <button onClick={() =>{setColor("olive")}}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"olive"}}>Olive</button>

        <button onClick={() =>{setColor("gray")}}  className="outline-none px-4 py-1 rounded-full text-black font-bold shadow-lg" style={{backgroundColor:"gray"}}>Gray</button>

        <button onClick={() =>{setColor("yellow")}}  className="outline-none px-4 py-1 rounded-full text-black shadow-lg font-bold" style={{backgroundColor:"yellow"}}>Yellow</button>

        <button onClick={() =>{setColor("pink")}}  className="outline-none px-4 py-1 rounded-full text-black shadow-lg font-bold" style={{backgroundColor:"pink"}}>Pink</button>

        <button onClick={() =>{setColor("purple")}}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold" style={{backgroundColor:"purple"}}>Purple</button>
         
        
      
        </div>

      </div>
     

    </div>
  )
}

export default App

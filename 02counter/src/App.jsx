import { useState } from 'react'

import './App.css'

function App() {
  // useState hook : responsible for change the state
  let [Counter , setCounter] = useState(5)
 

  // let Counter =5
  const addValue =()=>{
    // console.log("value added",Counter);
    // Counter = Counter +1
    // setCounter(Counter + 1)
     setCounter(prevCounter =>prevCounter +  1)
     setCounter(prevCounter =>prevCounter +  1)
     setCounter(prevCounter =>prevCounter +  1)
     setCounter(prevCounter =>prevCounter +  1)
  
  }

  const RemoveValue= ()=>{
    
    setCounter(Counter-1)
  }

  return (
    <>
    <h1>react chal rha ha</h1>
    <h2>counter value:{Counter}</h2>
    <button 
    onClick={addValue}>add value</button>
    <br />

    <button 
    onClick={RemoveValue}>decrease value</button>

    </>
  )
}

export default App
